import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Injectable()
export class LangService {
  constructor(private readonly i18n: I18nService) { }
  langTH() {
    return this.i18n.t('test.HELLO', { lang: I18nContext.current().lang })
  }

  langEN() {
    return this.i18n.t('test.HELLO', { lang: 'en' })
  }


}
