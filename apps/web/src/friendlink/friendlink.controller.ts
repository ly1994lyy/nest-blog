import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { friendLink } from 'libs/db/models/friendlink.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('friendlink')
@ApiTags('友链')
@Crud({
    model:friendLink,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
export class FriendlinkController {
    constructor(
        @InjectModel(friendLink) private model:ReturnModelType<typeof friendLink>
    ){}
}
