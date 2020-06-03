import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
    @ApiProperty({description:'博客标题'})
    title:string
    @ApiProperty({description:'博客内容'})
    content:string
}

@Controller('posts')
@ApiTags("博客接口")
export class PostsController {
    @Get()
    @ApiOperation({summary:'显示博客列表'})
    index():any{
        return [
            {id:1},
            {id:1},
            {id:1},
            {id:1},
            {id:1},
        ]
    }

    @Post()
    @ApiOperation({summary:'创建帖子'})
    create(@Body() body:CreatePostDto){
        body
        return {
            type:'successs'
        }
    }

    @Get(":id")
    @ApiOperation({summary:'博客详情'})
    detail(@Param('id') id:string):any{
        return {
            id,
            name:'liyue',
            age:12
        }
    }

    @Put(":id")
    @ApiOperation({summary:'编辑博客'})
    update(@Param('id') id:string,@Body() body:CreatePostDto):any{
        return{
            id,
            successs:true
        }
    }

    @Delete(":id")
    @ApiOperation({summary:'删除博客'})
    remove(@Param('id') id:string):any{
        return {
            successs:true
        }
    }
}
