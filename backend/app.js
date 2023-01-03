const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');
const colors = require('colors')
const app = express();
const dotenv = require('dotenv')
const swaggerDocs = require('./utils/swagger')
const connectDb = require('./utils/db')
const testRoutes = require('./routes/test.routes')
const userRoutes = require('./routes/user.routes')
const port = process.env.PORT || 4000;
connectDb();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

swaggerDocs(app);

//Serve frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
  
    app.get("/", (req, res) =>
      res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html"))
    );
  } else {
      app.get('/', (req, res) => res.send('Please set to production environment'))
  }

app.use('/api/test', testRoutes);
app.use('/api/users', userRoutes);



app.listen( port, () => console.log(`Sever is listening on port ${port}`))