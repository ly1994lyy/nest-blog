import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Category } from 'libs/db/models/category.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@Crud({
    model:Category,
    routes:{
        create:false,
        update:false,
        delete:false
    }
})
@ApiTags('分类')
export class CategoriesController {
    constructor(
        @InjectModel(Category) private model:ReturnModelType<typeof Category>
    ){}
}
