const express = require( 'express' );

const { dbConnection } = require( './database/config' );
cors = require( 'cors' );
require( 'dotenv' ).config();

const app = express();

//configure DB
dbConnection();

app.use( cors() );
app.use( express.json() );

app.get( '/', (req, res) => {
    res.send( 'Hello World!!' )
} );

app.listen( process.env.PORT, () => {
    console.log( `App listening at port ${ process.env.PORT }` );
} )
