const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  res.status(200).send('OK')
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
