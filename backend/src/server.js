// este es como el archivo app.js

//Initializations
const express = require('express');
const cors = require('cors');
const app = express();
// const path = require('path');
const morgan = require('morgan'); // middleware

//const exphbs = require('express-handlebars') // requerimos handlebars para enviar los archivos html al front

// Global variables 

// settings > configurar mas moduloes related with express
app.set('port', process.env.PORT || 4001);
app.set('json spaces', 2);
/*

app.set('views', path.join(__dirname + 'views')); // le decimos donde esta VIEWS y utilizamos path y dirname para poder hacer interoperabilidad con otros sistemas operativos SO
// esto se usa para renderizar las vistas desde el servidor
app.engine('.hbs', exphbs({
    defaultLayout: path.join(app.get('views'), 'layouts', 'main'), // definimos la vista del home
    layoutsDir: path.join(app.get('views'), 'layouts'), 
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs' // aqui le decimos la extension de los archivos, puede ser handlebars too
}) ); // requerimos handlebars para enviar los archivos html al front
app.set('view engine', '.hbs');
*/

// middlewares > if a user request something i can run something before processing his request
app.use(cors()); //cada vez que llegue una petiiòn se va a poder nviar y recibir datos
app.use(express.json()); // permite recibir y enviar formatos JSON
app.use(express.urlencoded({extended: false})); // sirve para decirle al server que cada vez que llega data, 
app.use(morgan('dev')); // para obtener + datos podemos usar el parametro 'combined'

// static files > files in public
//app.use(express.static(path.join(__dirname, 'public')));

// routes > just calling routes cuuz
app.use(require('../routes/routes.js')); // el ya sabe que va a ir a buscar index al partials de views y que le va a poner el layout
//app.use('/api/users', require('../routes/notes')  ); //cada vez que el front pida la ruta va a enviarle el res.send
//app.use('/api/search', require('../routes/users') ); // en vez del text se van a enviar archivos json

module.exports = app;