var moment = require('moment'); // require


const myDate = new Date();
var myCoolDate = moment(myDate).format('LL'); 

console.log(myCoolDate);
