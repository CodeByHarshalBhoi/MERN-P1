const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
const User = require("./models/user");

app.use(bodyParser.json());
app.use(cors());

main()
  .then(() => {
    console.log("Database connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/codewithyousafp1");
}

app.get("/users", async (req, res) => {
  let userData = await User.find({});
  res.send(userData);
});

app.post("/createUser", async (req, res) => {
  const bodyData = req.body;
  const user = new User(bodyData);
  const userData = await user.save();
  res.send(userData);
});

app.get("/getUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

app.put("/updateuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({_id:id}, req.body, {new:true})
    res.send(user)
  } catch (err) {
    res.send(err);
  }
});

app.delete("/deleteuser/:id",async (req, res)=>{
    try{
        const id = req.params.id;
        let delUser = await User.findByIdAndDelete({_id:id})
        console.log(delUser);
    }catch(err){
        console.log(err);
    }
})

app.get("/", (req, res) => {
  res.send("Wel come To express app");
});

app.listen(PORT, () => {
  console.log("App started on 3000 port");
});
