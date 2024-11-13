import { Module } from '@nestjs/common';
import { BookModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
