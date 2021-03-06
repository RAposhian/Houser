require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.get(`/api/houses`, ctrl.getHouses);
app.post(`/api/house`, ctrl.addHouse);


massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
})
.then(db => {
   app.set('db', db)
   console.log('DB connected')
   app.listen(port, () => console.log(`Server is running on port: ${port}`))
})