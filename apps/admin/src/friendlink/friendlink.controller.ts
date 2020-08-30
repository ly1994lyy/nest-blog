import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { friendLink } from 'libs/db/models/friendlink.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('friendlink')
@Crud({
    model:friendLink
})
@ApiTags('友链')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class FriendlinkController {
    constructor(
        @InjectModel(friendLink) private model:ReturnModelType<typeof friendLink>
    ){}
}
