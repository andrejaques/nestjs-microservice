export class Content {
  private readonly _content: string;

  get value(): string {
    return this._content;
  }

  private _validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this._validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this._content = content;
  }
}
