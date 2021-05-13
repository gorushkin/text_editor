import express from 'express';
// import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import multiparty from 'connect-multiparty';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('start back');

const MultipartyMiidleware = multiparty({ uploadDir: './server/images' });

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

app.use(express.static('./server/uploads'));

app.post('/uploads', MultipartyMiidleware, (req, res) => {
  const tempFile = req.files.upload;
  const tempPathFile = tempFile.path;
  const targetPathUrl = path.join(__dirname, './uploads', tempFile.name);
  if (path.extname(tempFile.originalFilename.toLowerCase()) === '.png' || '.jpg') {
    fs.rename(tempPathFile, targetPathUrl, (err) => {
      res.status(200).json({
        uploaded: true,
        url: `${tempFile.originalFilename}`,
      });
      if (err) return console.log(err);
    });
  }
});

app.listen(PORT, console.log(`app started at port ${PORT}`));
