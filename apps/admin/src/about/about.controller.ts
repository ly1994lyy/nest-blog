import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { About } from 'libs/db/models/about.model';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('about')
@Crud({
    model:About
})
@ApiTags('关于')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class AboutController {
    constructor(
        @InjectModel(About) private model:ReturnModelType<typeof About>
    ){}
}
