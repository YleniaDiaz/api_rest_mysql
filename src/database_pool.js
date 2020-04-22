const MYSQL = require('mysql');

const DATABASE = {
    host: 'localhost',
    user: 'root',
    password: 'ylenia',
    database: 'company',
    //max_connections: 15
};

const POOL = MYSQL.createPool(DATABASE);

POOL.getConnection((err, conn)=>{
    if(conn && !err){
        conn.release(); 
        console.log('OK CONNECTION DATABASE_POOL');   
        return;
    }else{
        console.log(`ERROR CONNECTION DATABASE_POOL -> ${err.message}`);
    }
});

module.exports=POOL;