const express = require('express')
let app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('src'));

app.listen(PORT,function(){
    console.log('Server running port: ' + PORT);
})
