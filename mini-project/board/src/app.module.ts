import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // .env 파일을 로드하고 환경 변수를 전역으로 사용할 수 있게 설정합니다.
    ConfigModule.forRoot({ isGlobal: true }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
