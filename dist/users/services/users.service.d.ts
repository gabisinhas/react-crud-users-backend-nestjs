import { Model } from 'mongoose';
import { User } from '../models/user.schema';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(data: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, data: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
