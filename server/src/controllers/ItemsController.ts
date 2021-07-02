import { Request, Response } from "express";

import items_view from "../views/items_view";
import { getRepository } from "typeorm";
import Item from "../models/Item";
import * as Yup from "yup";

export default {
  async index(request: Request, response: Response) {
    const itemsRepository = getRepository(Item);

    const items = await itemsRepository.find({
      relations: ["images"],
    });

    return response.json(items_view.renderMany(items));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const itemsRepository = getRepository(Item);

    const item = await itemsRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(items_view.render(item));
  },

  async create(request: Request, response: Response) {
    const { name, description } = request.body;

    const itemsRepository = getRepository(Item);

    const requestImage = request.files as Express.Multer.File[];

    const images = requestImage.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      description,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required().max(100),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
    const item = itemsRepository.create(data);

    await itemsRepository.save(item);

    return response.status(201).json(item);
  },
};
