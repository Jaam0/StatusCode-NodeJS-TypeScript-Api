import { IsNotEmpty, IsString, Length } from "class-validator";
import { AuthDto } from "./auth.dto";

export class UserDto extends AuthDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 60)
  fullname: string;

  @IsString()
  @Length(0, 6)
  gender: string;
}
