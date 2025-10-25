import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Render,
  Req,
  Res,
  Redirect,
  NotFoundException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import type { Request, Response } from 'express';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts') // localhost:8080/posts
export class PostsController {
  constructor(private postsService: PostsService) {} // 서비스 의존성주입

  // ✅ 페이지 라우팅 -> R(read)

  // 게시글 생성 페이지
  @Get('new')
  @Render('posts/edit')
  createPostPage() {
    return { title: '새 글 작성', post: {} };
  }

  // 게시글 상세 페이지
  @Get(':id')
  @Render('posts/detail')
  async detailPage(@Param('id') id: string) {
    console.log('상세 페이지');
    const post = await this.postsService.getPostById(id);
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return { title: post.title, post };
  }

  // 게시글 수정 페이지
  @Get('edit/:id')
  @Render('posts/edit')
  async editPostPage(@Param('id') id: string) {
    const post = await this.postsService.getPostById(id);
    return { title: '게시글 수정', post };
  }

  // 게시글 목록 페이지
  @Get() // localhost:8080/posts
  @Render('posts/list') // views/posts/list.hbs
  async postsPage(@Req() req: Request) {
    console.log('전체 게시글 조회');
    // 서비스레이어에 쿼리요청
    const page = parseInt(req.query.page as string, 10) || 1;
    const search = (req.query.search as string) || '';
    const { posts, paginator } = await this.postsService.getPosts(page, search);

    // 뷰페이지에 전달하는 객체
    return {
      title: '게시판',
      search,
      posts,
      paginator,
    };
  }

  // ✅ 애플리케이션 라우팅 -> CUD(create, update, delete)

  // 게시글 생성
  @Post('new')
  @Redirect('/posts')
  async createPost(@Body() createPostDto: CreatePostDto) {
    await this.postsService.createPost(createPostDto);
  }

  // 게시글 수정
  @Post('edit/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: CreatePostDto,
    @Res() res: Response,
  ) {
    await this.postsService.updatePost(id, updatePostDto);
    res.redirect(`/posts/${id}`);
  }

  // 게시글 삭제
  @Get('delete/:id')
  @Redirect('/posts')
  async deletePost(@Param('id') id: string) {
    await this.postsService.deletePost(id);
  }
}
