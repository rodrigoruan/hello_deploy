const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const TEXT = process.env.TEXT || 'Está vivo';

app.get('/', (_req, res) => {
  res.send(TEXT);
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
