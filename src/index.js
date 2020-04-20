const EXPRESS = require('express');
const APP = EXPRESS();

//process.env.PORT -> buscar una variable de entorno que se llame PORT
APP.set('PORT', process.env.PORT || 8000);

APP.use(EXPRESS.json());

APP.use(require('./routes/employee_routes'));

APP.listen(APP.get('PORT'), ()=>{
    console.log(`SERVER IN PORT ${APP.get('PORT')}`);
});