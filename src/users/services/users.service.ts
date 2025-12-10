import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.schema';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async create(data: CreateUserDto) {
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  async update(id: string, data: UpdateUserDto) {
    const updated = await this.userModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException('Usuário não encontrado para atualizar');
    }

    return updated;
  }

  async delete(id: string) {
    const deleted = await this.userModel.findByIdAndDelete(id).exec();

    if (!deleted) {
      throw new NotFoundException('Usuário não encontrado para excluir');
    }

    return { message: 'Usuário deletado com sucesso' };
  }
}
