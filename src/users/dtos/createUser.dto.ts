import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail(undefined, {
    message: '適切なメールアドレスを入力してください',
  })
  email: string;
  @IsString()
  password: string;
}
