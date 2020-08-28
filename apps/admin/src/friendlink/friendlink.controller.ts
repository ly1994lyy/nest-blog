import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { friendLink } from 'libs/db/models/friendlink.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Controller('friendlink')
@Crud({
    model:friendLink
})
@ApiTags('友链')
export class FriendlinkController {
    constructor(
        @InjectModel(friendLink) private model:ReturnModelType<typeof friendLink>
    ){}
}
