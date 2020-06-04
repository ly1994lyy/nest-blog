import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreatePostDto {
    @ApiProperty({description:'博客标题',example:'博客标题'})
    @IsNotEmpty({message:'请填写标题'})
    title:string
    @ApiProperty({description:'博客内容',example:'博客内容'})
    content:string
}

@Controller('posts')
@ApiTags("博客接口")
export class PostsController {
    constructor(@InjectModel(PostSchema) private readonly postModel:ModelType<PostSchema>){}
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get()
    @ApiOperation({summary:'显示博客列表'})
    async index(){
        return await this.postModel.find()
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    @ApiOperation({summary:'创建帖子'})
    async create(@Body() createPostDto:CreatePostDto){
        await this.postModel.create(createPostDto)
        return {
            successs:true
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get(":id")
    @ApiOperation({summary:'博客详情'})
    async detail(@Param('id') id:string){
        return await this.postModel.findById(id)
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Put(":id")
    @ApiOperation({summary:'编辑博客'})
    async update(@Param('id') id:string,@Body() updatePostDto:CreatePostDto){
        await this.postModel.findByIdAndUpdate(id,updatePostDto)
        return {
            successs:true
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Delete(":id")
    @ApiOperation({summary:'删除博客'})
    async remove(@Param('id') id:string){
        await this.postModel.findByIdAndDelete(id)
        return {
            successs:true
        }
    }
}
