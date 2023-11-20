const express = require('express');

const PORT = 5001;

const app = express();

app.get('/', (req, res, next) => {
  res.send('Whattt up');
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
