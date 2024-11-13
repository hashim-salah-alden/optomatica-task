import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBookDto } from './dto/CreateBook.dto';
import { BooksService } from './books.service';
import { Book } from './schema/Book.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import mongoose from 'mongoose';

@Controller('api/books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findBooks(@Query() query: ExpressQuery) {
    return this.booksService.getBooks(query);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Delete(':id/delete')
  async deleteBook(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invaild ID', 400);
    const deletedBook = await this.booksService.deleteBook(id);
    if (!deletedBook) throw new HttpException('Book Not Found', 404);
    return ;
  }
}
