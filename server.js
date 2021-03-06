// // const express = require('express')
// // let app = express()
// // const PORT = process.env.PORT || 3000;

// // app.use(express.static('src'));

// // app.listen(PORT,function(){
// //     console.log('Server running port: ' + PORT);
// // })

// const {createServer} = require('http');
// const express = require('express');
// const compression = require('compression');
// const morgan = require('morgan');
// const path = require('path');

// const normalizePort = port => parseInt(port,10);
// const PORT = normalizePort(process.env.PORT ||5000)
// const app = express();
// const dev = app.get('env') !== 'production'


// if(!dev){
//     app.disable('x-powered-by')
//     app.use(compression())
//     app.use(morgan('common'))
//     app.use(express.static(path.resolve(__dirname,'build')))
//     app.get('*', (req,res)=>{
//         res.sendFile(path.resolve(__dirname,'build','index.html'))
//     })
// }
// if(dev){
//     app.use(morgan('dev'))
// }

// const server = createServer(app)

// server.listen(PORT, err =>{
//     if(err) throw err;
//     console.log('Server Started');
// })


const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);