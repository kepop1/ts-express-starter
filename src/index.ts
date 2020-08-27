import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import Widget from './models/Widget';
import { getAllWidgets } from './handlers';

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/widgets';

const mongooseOptions = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(DB_URI, mongooseOptions);

app.get('/widgets', getAllWidgets);

app.get('/widgets/:id', async (req: Request, res: Response) => {
  //If id is null, then this defaults to the prior route '/widgets'
  const id = req.params.id;

  const widget = await Widget.findById(id).catch((err: any) => {
    console.log(err);
    console.log('error');
  });

  res.status(200).json(widget);
});

app.put('/widgets', async (req: Request, res: Response) => {
  // Make a TS model
  const widgetToEdit = req.body;

  try {
    const response = await Widget.findByIdAndUpdate(widgetToEdit._id, widgetToEdit, { new: true });

    if (response) {
      res.status(201).json({});
      return;
    }

    res.status(400).json({ message: "There's missing values in your request." });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "There's missing values in your request." });
  }
});

app.post('/widgets', async (req: Request, res: Response) => {
  const widgetToCreate = req.body;

  try {
    await Widget.create(widgetToCreate);

    res.status(201).json({});
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.delete('/widgets/:id', async (req: Request, res: Response) => {
  //If id is null, perhaps handle?.
  const id = req.params.id;

  try {
    await Widget.findByIdAndDelete(id);
  } catch (err) {
    console.log(err.message);
  }

  res.status(200).json({});
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
