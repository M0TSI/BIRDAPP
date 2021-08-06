require('dotenv').config();
const app = require('./server');
//require('./database'); // s'olo con requerirlo ya se ejecuta el c'odigo, por ello no lo guardamos

async function main() {
    await app.listen(app.get('port'));
    console.log('serve on ', app.get('port'));    
}

main();