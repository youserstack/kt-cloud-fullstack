import { Document } from 'mongoose';

export interface Post extends Document {
  readonly author: string;
  readonly title: number;
  readonly content: string;
  readonly comments: Comment[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
