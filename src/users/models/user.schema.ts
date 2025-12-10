import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  nome!: string;

  @Prop({ required: true })
  endereco!: string;

  @Prop({ required: true })
  cep!: string;

  @Prop()
  profissao!: string;

  @Prop({ required: true })
  nomeMae!: string;

  @Prop({ required: true })
  estadoCivil!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
