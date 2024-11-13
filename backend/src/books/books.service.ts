import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/CreateBook.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schema/Book.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async getBooks(query: Query) {
    const { title, year } = query;

    const limit = Number(query.limit) || 10;
    const page = Number(query.page) || 1;
    const skip = (page - 1) * limit;

    let filter: any = {};
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (year) filter.publishedDate = year;

    const totalBooks = await this.bookModel.countDocuments();

    const allBooks = await this.bookModel.find();

    const books = await this.bookModel
      .find(filter)
      .limit(limit)
      .skip(skip)
      .exec();
    return {
      books,
      allBooks,
      currentPage: Number(page),
      totalPages: Math.ceil(totalBooks / limit),
    };
  }

  async createBook({ ...CreateBookDto }: CreateBookDto) {
    const newBook = new this.bookModel({ ...CreateBookDto });
    return newBook.save();
  }

  deleteBook(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
