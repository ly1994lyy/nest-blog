import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { About } from 'libs/db/models/about.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('about')
@ApiTags('关于')
@Crud({
    model:About,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
export class AboutController {
    constructor(
        @InjectModel(About) private model:ReturnModelType<typeof About>
    ){}
}
