const express = require("express");
const cors = require('cors')
const Router = require("./Routes/UserRouter");
const createdata = require("./Dbs/dbconnection");
const { errorHandler } = require("./Midddleware/Errormiddel");

const app = express();


 
createdata()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:false}));
app.use('/' ,Router)
 app.use(errorHandler);





// app.post("/add", async (req, res) => {
//   const {
//     firstName,
//     lastName,
//     Phone,
//     DOB,
//     gender,
//     Address,
//     name,
//     email,
//     employment,
//     accountType,
//     amount,
//   } = req.body;
//   console.log( DOB)
//   console.log( firstName)
//   console.log(  lastName)
//   console.log( Phone)
//   console.log(gender)
//   console.log( Address)
//   console.log(name)
//   console.log( email)
//   console.log(employment)
//   console.log( accountType)
//   console.log(  amount)

//   if (
//     !firstName ||
//     !lastName ||
//     !Phone ||
//     !gender ||
//     !Address ||
//     !name ||
//     !email ||
//     !employment ||
//     !accountType ||
//     !amount
//   ) {
//       res.status(404);
//       throw new Error("All file")
//   }
  
//   const newUser = new user({
//     firstName,
//     lastName,
//     Phone,
//     gender,
//     Address,
//     name,
//     email,
//     employment,
//     accountType,
//     amount,
//   });

//   await newUser.save();
//   res.json(newUser);
// });

// app.get("/customers", async (req, res) => {
//   try {
//     const User = await user.find();
//     res.send(User);
//     // console.log(User)
//     //   res.status(200).json(User.favourite);
//     // console.log(User.favourite)
//   } catch (e) {
//     console.log(e);
//     res.status(500).json();
//   }
// });

// app.get("/customers/:id", async (req, res) => {
//   // const { id} = req.body;
//   // console.log(req.params.id);
//   const data = await user.findById(req.params.id);
//   // console.log(data);
//   if (data) {
//     res.send(data);
//     // console.log(data);
//   }
// });

// app.put("/customer/money", async (req, res) => {
//   // console.log(req.body)
//   try {
//     const { id, count, id2 } = req.body;
//     const data = await user.findById(id);
//     const data2 = await user.findById(id2);
//     data2.amount = count + data2.amount;
//     data.amount = data.amount - count;
//     data.save();
//     data2.save();
//     res.send("updated successfull");
//   } catch (e) {
//     console.log(e.message);
//   }
//   // data.update({amount:amount1})

//   // res.send("The amount is debited rupees from _ and creidet to rupess _ ")
// });


// app.post("/transactions" , async(req,res) => {
//   try {
//   const { id, count, id2 } = req.body;
//   const data = await user.findById(id);
//   const data2 = await user.findById(id2);
// // console.log(req.body);
//   const newTrans = new transactions({
//     userOne : data.name,
//     userTwo:data2.name,
//     amount:count
//   })

//   await newTrans.save();
// } catch (e) {
//   console.log(e);
// }
// })


// app.get("/gettransactions", async (req,res) => {
//   try {
//     const data = await transactions.find();
//     res.send(data);
//     // console.log(data)
//   } catch (e) {
//     console.log(e);
//     res.status(500).json();
//   }
// })


app.listen(4000 ,()=>{
  console.log('server is running 4000')
})