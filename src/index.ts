import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});
 
const quotes: { quote: string; author: string }[] = [
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
];

app.get("/quote", (req: Request, res: Response) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return res.json(random);
});



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


