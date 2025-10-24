import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './posts/posts.schema';
import { PostsRepository } from './posts/posts.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog'),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  // providers: [PostsService, PostsRepository],
  providers: [
    PostsService,
    {
      provide: 'PostsRepositoryImplement', // 토큰 이름
      useClass: PostsRepository, // 실제 클래스
    },
  ],
})
export class AppModule {}
