import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Article } from 'libs/db/models/article.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('articles')
@ApiTags('文章')
@Crud({
    model:Article,
    routes:{
        create:false,
        update:false,
        delete:false,
    }
})
export class ArticlesController {
    constructor(
        @InjectModel(Article) private model:ReturnModelType<typeof Article>
    ){}
}
