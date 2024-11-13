import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schema/Book.schema';
import { BooksService } from './books.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BookModule {}
