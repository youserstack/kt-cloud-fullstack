import { Controller, Get, Render, Req } from '@nestjs/common';
import { PostsService } from './posts/posts.service';
import type { Request } from 'express';

@Controller()
export class AppController {
  constructor(private postsService: PostsService) {} // PostsService 의존성 주입

  @Get()
  @Render('home') // home.hbs 템플릿을 렌더링합니다.
  async root(@Req() req: Request) {
    console.log('홈페이지');
    return { title: '홈페이지' };
  }
}
