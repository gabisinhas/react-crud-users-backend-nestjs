import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/user.dto';
import { UpdateUserDto } from '../dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/user.schema").User, {}, {}> & import("../models/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    create(body: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").User, {}, {}> & import("../models/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").User, {}, {}> & import("../models/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(id: string, body: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../models/user.schema").User, {}, {}> & import("../models/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
