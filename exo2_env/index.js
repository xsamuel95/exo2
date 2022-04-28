require('dotenv').config();
if (process.env.MAVARIABLE) {
  console.log(process.env.MAVARIABLE);
} else console.log('MAVARIABLE is not defined');