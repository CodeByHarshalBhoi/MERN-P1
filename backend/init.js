const mongoose = require("mongoose");
const User = require("./models/user")

main()
  .then(() => {
    console.log("Database connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/codewithyousafp1")
}
let allUsers = ([
    {
        name:"Ayush",
        email:"ayush@gmail.com",
        mobile:99999999,
    },
    {
        name:"Ayush",
        email:"ayush@gmail.com",
        mobile:99999999,
    },
    {
        name:"Ayush",
        email:"ayush@gmail.com",
        mobile:99999999,
    },
   
]);

User.insertMany(allUsers);