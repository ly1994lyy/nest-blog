import { Controller, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Category } from 'libs/db/models/category.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags, ApiBasicAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Crud({
    model:Category
})
@ApiTags('分类')
@Controller('categories')
@ApiBasicAuth()
@UseGuards(AuthGuard('jwt'))
export class CategoriesController {
    constructor(@InjectModel(Category) private model:ReturnModelType<typeof Category>){}
}
