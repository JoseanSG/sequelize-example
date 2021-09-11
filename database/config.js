const { Sequalize } = require( 'sequelize' );

const sequelize = new Sequalize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
} );

const dbConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log( "DB online" );
    } catch (error) {
        console.log( `Unable to connect to database ${error}` );
    }
} 

module.exports = {
    dbConnection
}