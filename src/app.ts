import express, { Request, Response } from 'express';


const app = express();

app.get('/', (req : Request, res: Response) => {
  res.send('University server running!');
});


export default app;