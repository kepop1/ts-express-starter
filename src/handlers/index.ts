import { Request, Response } from 'express';
import Widget from '../models/Widget';

export const getAllWidgets = async (_: Request, res: Response): Promise<void> => {
  try {
    const widgets = await Widget.find({});
    res.status(200).json({ widgets });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: 'No data found' });
  }
};
