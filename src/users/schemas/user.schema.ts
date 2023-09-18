import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true, type: [String] })
  skillsets: string[];

  @Prop({ required: true })
  hobby: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
