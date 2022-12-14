import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class MailService {
  abstract sendEmail(): string;
}
