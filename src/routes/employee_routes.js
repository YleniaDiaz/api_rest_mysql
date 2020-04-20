const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const MYSQL_CONNECTION = require('../database');

//GET ALL
ROUTER.get('/', (req, res)=>{
    MYSQL_CONNECTION.query('select * from employees', (err, rows, fields)=>{
        if(!err){
            res.json(rows);

            rows.forEach(element => {
                console.log(element);
            });

            fields.forEach(element => {
                console.log(`ERROR SELECT * -> ${element.name}`);
            });
        }else{
            console.log(`ERROR SELECT * -> ${err.message}`);
        }  
    });
});

//GET WITH ID
ROUTER.get('/:id', (req, res)=>{
    const {id} = req.params;
    if(!isNaN(parseInt(id))){
        MYSQL_CONNECTION.query(`select * from employees where id=?`, [id],  (err, rows, fields)=>{
            err ? console.log(`ERROR SELECT WHERE ID -> ${err.message}`) 
                : res.json(rows);
        });
    }
});

//CREATE
ROUTER.post('/', (req, res)=>{
    const {name, salary} = req.body;
    const QUERY = `insert into employees (name, salary) values ('${name}', ${salary});`
    MYSQL_CONNECTION.query(QUERY, (err, rows, fields)=>{
        err ? console.log(`ERROR INSERT -> ${err.message}`) 
            : res.json({"status": "Correct Insert"});
    });
});

//DELETE
ROUTER.delete('/:id', (req, res)=>{
    const {id} = req.params;
    if(!isNaN(parseInt(id))){
        MYSQL_CONNECTION.query(`delete from employees where id=?`, [id],  (err, rows, fields)=>{
            err ? console.log(`ERROR DELETE -> ${err.message}`) 
                : res.json({"status": "Correct Delete"});
        });
    }
});

//UPDATE
ROUTER.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {name, salary} = req.body;
    const QUERY = `update employees set name='${name}', salary=${salary} where id=${id}`;
    if(!isNaN(parseInt(id))){
        MYSQL_CONNECTION.query(QUERY,  (err, rows, fields)=> 
            err ? console.log(`ERROR UPDATE -> ${err.message}`) : res.json({"status": "Correct Update"}));
    }
});

module.exports=ROUTER;