import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    if (!table) {
      return res.status(400).json({
        error: 'Table is required'
      });
    }

    const category = await Order.create({ table, products });

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

