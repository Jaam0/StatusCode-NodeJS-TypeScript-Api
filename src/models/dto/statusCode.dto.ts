import { IsNotEmpty, IsString,IsNumber } from "class-validator";

export class StatusCodeDto {
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  codeStatus: string;

  @IsString()
  note: string;

  @IsNotEmpty()
  @IsString()
  status:string;
}

export class StatusCodeObjectIdDto {
    @IsNotEmpty()
    @IsString()
    id: string;
}
