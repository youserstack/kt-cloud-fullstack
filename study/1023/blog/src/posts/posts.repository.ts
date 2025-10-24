import { PostDto } from './dto/post.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './posts.schema';

export interface PostsRepositoryImplement {
  getAllPosts(): Promise<PostDto[]>;
  getPost(id: string): Promise<PostDto | null>;
  createPost(postDto: PostDto): Promise<PostDto | null>;
  deletePost(id: string): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<PostDto | null>;
}

@Injectable()
export class PostsRepository implements PostsRepositoryImplement {
  constructor(@InjectModel(Post.name) private post: Model<PostDocument>) {
    this.post = post;
  }

  async getAllPosts() {
    console.log('전체 게시글 조회');
    return this.post.find().exec();
  }

  async getPost(id: string) {
    console.log(`${id} 게시글 조회`);
    return this.post.findById(id).exec();
  }

  async createPost(postDto: PostDto) {
    console.log('게시글 생성');
    return this.post.create(postDto);
  }

  async deletePost(id: string) {
    console.log(`${id} 게시글 삭제`);
    await this.post.findByIdAndDelete(id).exec();
  }

  async updatePost(id: string, postDto: PostDto) {
    console.log(`${id} 게시글 수정`);
    const updatedPost = { ...postDto, updatedAt: new Date() };
    return this.post.findByIdAndUpdate(id, postDto, { new: true }).exec();
  }
}
