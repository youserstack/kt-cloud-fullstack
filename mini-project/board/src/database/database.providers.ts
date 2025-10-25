import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    //   useFactory: (configService: ConfigService): Promise<typeof mongoose> =>
    // mongoose.connect(configService.get<string>('MONGODB_URI') as string),
    useFactory: (configService: ConfigService): Promise<typeof mongoose> => {
      mongoose.connection.on('connected', () =>
        console.log('✅ mongodb 연결성공!'),
      );
      mongoose.connection.on('error', (error) =>
        console.error('❌ mongodb 연결실패!', error),
      );
      mongoose.connection.on('disconnected', () => {
        console.log('ℹ️ mongodb 연결이 끊어졌습니다. 연결을 재시도합니다.');
      });

      return mongoose.connect(configService.getOrThrow<string>('MONGODB_URI'));
    },
    inject: [ConfigService], // ConfigService를 주입하도록 명시적으로 설정
  },
];
