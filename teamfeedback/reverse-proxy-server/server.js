const express = require('express');
const app = express();
const port = 3202;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  `App listening at http://localhost:${port}`
});