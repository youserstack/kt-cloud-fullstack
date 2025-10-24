import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import type { PostDto } from './dto/post.dto';

@Controller('posts') // localhost:3000/posts
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post() // localhost:3000/posts post
  createPost(@Body() postDto: PostDto) {
    console.log('게시글 생성');
    return this.postsService.createPost(postDto);
  }

  @Get() // localhost:3000/posts get
  getAllPosts() {
    console.log('전체 게시글 조회');
    return this.postsService.getAllPosts();
  }

  @Get(':id') // localhost:3000/posts/123 get
  getPostById(@Param() id: string) {
    console.log(`${id} 게시글 조회`);
    return this.postsService.getPostById(id);
  }

  @Delete(':id') // localhost:3000/posts/123 delete
  deletePostById(@Param() id: string) {
    console.log(`${id} 게시글 삭제`);
    return this.postsService.deletePost(id);
  }

  @Put(':id') // localhost:3000/posts/123 put
  updatePostById(@Param() id: string, @Body() postDto: PostDto) {
    console.log(`${id} 게시글 수정`);
    return this.postsService.updatePost(id, postDto);
  }
}
