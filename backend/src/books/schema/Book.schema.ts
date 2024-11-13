import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  publishedDate: number;

  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
