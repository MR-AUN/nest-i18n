import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n'
import { LangModule } from './lang/lang.module';
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'th', //Default Language
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    LangModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
