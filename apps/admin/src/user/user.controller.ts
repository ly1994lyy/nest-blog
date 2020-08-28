import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { User } from 'libs/db/models/user.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('user')
@Crud({
    model:User
})
@ApiTags('用户')
export class UserController {
    constructor(
        @InjectModel(User) private model:ReturnModelType<typeof User>
    ){}
}
