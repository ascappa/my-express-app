const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;  // <-- use Azure's port if available

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
