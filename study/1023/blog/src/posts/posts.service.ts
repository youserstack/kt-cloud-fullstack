import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { PostDto } from './dto/post.dto';
import type { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(
    @Inject('PostsRepositoryImplement')
    private readonly postsRepository: PostsRepository,
  ) {}

  async getAllPosts(): Promise<PostDto[]> {
    return await this.postsRepository.getAllPosts();
  }

  createPost(postDto: PostDto) {
    return this.postsRepository.createPost(postDto);
  }

  async getPostById(id: string): Promise<PostDto> {
    const post = await this.postsRepository.getPost(id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async updatePost(id: string, postDto: PostDto): Promise<PostDto> {
    const updatedPost = await this.postsRepository.updatePost(id, postDto);
    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return updatedPost;
  }

  deletePost(id: string) {
    console.log(`${id} 게시글 삭제`);
    return this.postsRepository.deletePost(id);
  }
}
