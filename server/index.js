require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env
      port = SERVER_PORT,
      app = express();

app.use(express.json());




massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
})
.then(db => {
   app.set('db', db)
   console.log('DB connected')
   app.listen(port, () => console.log(`Server is running on port: ${port}`))
})