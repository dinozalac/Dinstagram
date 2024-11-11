const express = require('express')
const app = express();

const PORT = 3001; 

app.use(express.json())
const db = require('./models')


//Routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);

db.sequelize.sync().then(()=> {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})


