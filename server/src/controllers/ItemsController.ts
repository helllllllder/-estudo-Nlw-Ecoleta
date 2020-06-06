import { Request, Response } from 'express';
import knex from '../database/connection';

const site_url = 'http://192.168.0.10:3333';

class ItemsController {
    async index(request: Request, response: Response){
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `${site_url}/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItems);
    }
};

export default ItemsController;