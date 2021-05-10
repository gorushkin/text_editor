import express from 'express';
// import bodyParser from 'body-parser';
import morgan from 'morgan';
import multiparty from 'connect-multiparty';

console.log('start back');

const MultipartyMiidleware = multiparty({ uploadDir: './images' });

const app = express();

const PORT = process.env.port || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "It's express" });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: "It's express" });
});

app.post('/uploads', MultipartyMiidleware, (req, res) => {
  console.log(req.files.upload);
  console.log('img');
  const tempFile = req.files.upload;
})

app.listen(PORT, console.log(`app started at port ${PORT}`));
