import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Other } from 'libs/db/models/other.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('other')
@ApiTags('其他')
@Crud({
    model:Other,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
export class OtherController {
    constructor(
        @InjectModel(Other) private model:ReturnModelType<typeof Other>
    ){}
}
