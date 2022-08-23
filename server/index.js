const express = require('express')
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})