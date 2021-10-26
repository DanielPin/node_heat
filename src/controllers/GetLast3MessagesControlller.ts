import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesControlller {
  async handle(request: Request, response: Response) {
    const service = new GetLast3MessagesService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLast3MessagesControlller };
