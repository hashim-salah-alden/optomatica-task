import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  publishedDate: string;

  @IsOptional()
  @IsString()
  description: string;
}
