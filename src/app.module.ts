import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './modules/mail/mail.service';
import { SMTPMailService } from './modules/mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController, MailService],
  providers: [AppService, SMTPMailService],
})
export class AppModule {}
