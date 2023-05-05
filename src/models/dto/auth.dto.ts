import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";

export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  @Length(10, 60)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6,100)
  password: string;
}
