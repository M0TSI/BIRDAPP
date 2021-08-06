/*

const mongoose = require ('mongoose');

// aqui se va a hacer el esquema de los datos que van a la BD no SQL

const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI 
            : 'mongodb://localhost/mernstack' ; 
            //si el elemento no existe... mongo lo crea / si existe el env lo toma sino crea el elemento

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('DB is connected') // una vez exista la conecci[on entonces muestre este mensaje]
})

*/