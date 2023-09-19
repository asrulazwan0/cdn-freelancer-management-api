import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true, type: [String] })
  skillsets: string[];

  @Prop({ required: true })
  hobby: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
