import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './modules/mail/email.module';
import { MailService } from './modules/mail/mail.service';
import { SMTPMailService } from './modules/mail/smtp-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [MailModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}
