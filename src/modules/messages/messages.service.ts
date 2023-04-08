import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
    private readonly messages: string[] = [];

    createMessage(content: string) {
        this.messages.push(content);
    }

    listMessages() {
        return this.messages;
    }

    getMessage(id: number) {
        return this.messages[id];

    }


}
