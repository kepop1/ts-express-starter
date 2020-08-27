import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/hello', (_: Request, res: Response) => {
  res.status(200).json({ hello: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
