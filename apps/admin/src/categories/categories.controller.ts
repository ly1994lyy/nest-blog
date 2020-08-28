import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Category } from 'libs/db/models/category.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Category
})
@ApiTags('分类')
@Controller('categories')
export class CategoriesController {
    constructor(@InjectModel(Category) private model:ReturnModelType<typeof Category>){}
}
