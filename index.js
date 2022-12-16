const express = require ('express');
const app = express();
const scheduler = require('node-cron');

const PORT= 1338;

scheduler.schedule("* * * * *", () => {
  console.log('inside scheduler');
})
app.listen(PORT, () =>{
  console.log('server is running');
})