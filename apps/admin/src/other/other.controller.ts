import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Other } from 'libs/db/models/other.model';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('other')
@Crud({
    model:Other
})
@ApiTags('其他')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class OtherController {
    constructor(
        @InjectModel(Other) private model:ReturnModelType<typeof Other>
    ){}
}
