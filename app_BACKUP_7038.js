<<<<<<< HEAD

=======
const express = requiere('express');
const http = require("http");
const path = require("path");


const app = express();

app.use(express.static(path.join
>>>>>>> 15da938166f4c17955de4a18d6d4adcd3bae2d35
const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
