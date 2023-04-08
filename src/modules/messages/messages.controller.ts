import { Body, Param, Controller, Get, Post } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { CreateMessageDto } from "./dto/create-message.dto";

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) { }

    @Get()
    listMessages() {
        return this.messagesService.listMessages();
    }

    @Post()
    createMessage(@Body() createMessageDto: CreateMessageDto) {
        return this.messagesService.createMessage(createMessageDto.content);
    }


    @Get(':id')
    getMessage(@Param('id') id: number) {
        return this.messagesService.getMessage(id);
    }

}





