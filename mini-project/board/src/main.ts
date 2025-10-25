import { NestFactory } from '@nestjs/core'; // NestJS 핵심 기능을 불러옴 (애플리케이션 생성에 사용)
import { AppModule } from './app.module'; // 루트 모듈(AppModule) 불러오기 — NestJS 애플리케이션의 시작점
import { NestExpressApplication } from '@nestjs/platform-express'; // Express 기반의 NestJS 애플리케이션을 사용하기 위해 필요한 타입
import { join } from 'path';
import { engine } from 'express-handlebars';
// import hbs from 'hbs';

async function bootstrap() {
  // Nest 애플리케이션 생성 (Express 기반으로)
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 정적 파일(이미지, CSS, JS 등)을 제공할 경로를 설정
  // 예: public 디렉토리 안의 파일들은 브라우저에서 직접 접근 가능 (/images/logo.png 등)
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // View 템플릿 파일(hbs)을 찾을 기본 디렉토리 설정
  // 예: views 폴더 안의 .hbs 파일들을 템플릿으로 사용
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Handlebars의 "partials" (부분 템플릿) 폴더 등록
  // 예: views/layout 폴더 안의 header.hbs, footer.hbs 등을 {{> header}} 형태로 재사용 가능하게 함
  // hbs.registerPartials(join(__dirname, '..', 'views/layout'));
  // hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  // Handlebars 엔진 설정
  // defaultLayout, layoutsDir, partialsDir 등을 여기서 한 번에 설정합니다.
  app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'layout',
      layoutsDir: join(__dirname, '..', 'views/layouts'),
      partialsDir: [
        join(__dirname, '..', 'views/partials'),
        join(__dirname, '..', 'views/posts'), // posts 디렉토리도 파셜로 사용하도록 추가
      ],
      helpers: {
        // 'eq' 헬퍼를 등록합니다. 두 값이 같으면 true를 반환합니다.
        eq: (a, b) => a === b,
      },
    }),
  );

  // View 엔진을 'hbs' (Handlebars)로 설정
  // 이 설정 이후 controller에서 `res.render('파일명', 데이터)` 형태로 렌더링 가능
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 8080);
}

// 애플리케이션 시작
bootstrap();
