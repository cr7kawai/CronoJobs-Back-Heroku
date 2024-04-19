import mysql from 'promise-mysql';

const pool = mysql.createPool({
    host: 'al-motors.cxkeo8im47tc.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'AlMotors10',
    database: 'al_motors',
});

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

export default pool;