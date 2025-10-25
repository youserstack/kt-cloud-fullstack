import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { createPaginator, Paginator } from 'src/utils/paginator';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_MODEL')
    private post: Model<Post>,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    // 게시글 번호를 생성하기 위해 현재 게시글 수를 조회합니다.
    const totalPosts = await this.post.countDocuments().exec();
    const postNumber = totalPosts + 1;

    const newPost = new this.post({ ...createPostDto, postNumber });
    return newPost.save();
  }

  async getPostById(id: string): Promise<Post> {
    const post = await this.post.findById(id).lean<Post>().exec(); // lean<제네릭타입> -> js객체반환!
    if (!post) throw new NotFoundException(`Post with id ${id} not found`);
    return post;
  }

  async updatePost(id: string, updatePostDto: CreatePostDto): Promise<Post> {
    const post = await this.post
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
    if (!post) throw new NotFoundException(`Post with id ${id} not found`);
    return post;
  }

  async deletePost(id: string): Promise<void> {
    await this.post.findByIdAndDelete(id).exec();
  }

  async getPosts(
    page: number,
    search: string,
  ): Promise<{ posts: Post[]; paginator: Paginator }> {
    const perPage = 10;
    const query = { title: new RegExp(search, 'i') }; // 검색어를 이용한 쿼리객체생성. i옵션은 대소문자를 구분안함.

    // 병렬조회
    const [totalCount, posts] = await Promise.all([
      this.post.countDocuments(query),
      this.post
        .find(query)
        .sort({ createdAt: -1 }) // 내림차순정렬
        .skip((page - 1) * perPage)
        .limit(perPage)
        .lean<Post[]>() // Mongoose 문서를 순수 JavaScript 객체로 변환합니다.
        .exec(), // 쿼리실행
    ]);

    const paginator = createPaginator({ page, perPage, totalCount });

    return { posts, paginator };
  }
}
