import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { DatabaseModule } from 'src/database/database.module';
import { postsProviders } from './posts.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
  exports: [PostsService], // PostsService를 다른 모듈에서 사용할 수 있도록 export 합니다.
})
export class PostsModule {}
