const myhist =require('../Moddles/TrasactionSchema')
const user = require('../Moddles/UserSchema')


const Add = async (req, res)=> {
    const {
      // mid,
      FirstName,
      lastName,
      phone,
      Gender,
      Address,
      Account,
      email,
      Father_Name,
      actype,
      mamount,
    } = req.body;
    // console.log( mid)
    console.log(FirstName)
    console.log( lastName)
    console.log( phone)
    console.log(Gender)
    console.log( Address)
    console.log( Account)
    console.log( email)
    console.log(Father_Name)
    console.log( actype)
    console.log(mamount)
  
    if (
      // !mid ||
      !FirstName ||
      !lastName ||
      !phone ||
      !Gender ||
      !Address ||
      ! Account ||
      !email ||
      !Father_Name||
      !actype ||
      !mamount
    ) {
        res.status(404);
        throw new Error("please input all the field")
    }
      //  const id = Number(mid);
       const amount = Number(mamount);
    const newUser = new user({  
      // id,
      FirstName,
      lastName,
      phone,
      Gender,
      Address,
      Account,
      email,
      Father_Name,
      actype,
      amount,
    });
  
    await newUser.save();
    res.json(newUser);
  }

  const Costumer = async (req, res) => {  
    try {
      const User = await user.find();
      res.send(User);
    } catch (e) {
      console.log(e);
      res.status(500).json();
    }
}

const Getbyid = async (req, res) => {
    // const { id} = req.body;
    console.log(req.params.id);
    const data = await user.find({id:req.params.id});
    console.log(data);
    
    if (data) {
      res.send(data);
      console.log(data);
    }
  }

  
const Setdata = async (req, res) => {
    // console.log(req.body)
    try {
      const {id,count,idm } = req.body;
      console.log(id);
      console.log(count);
      console.log(idm);

      const data = await user.findOne({id:id});
      const data2 = await user.findOne({id:idm});
      //const count =  data2.amount;
      console.log(data);
      console.log(data2);
      console.log(data.amount);
      console.log(data2.amount);
      data2.amount = count + data2.amount;
      data.amount = data.amount - count;
      data.save();
      data2.save();
      res.send("updated successfull");
    } catch (e) {
      console.log(e.message);
    }
    // data.update({amount:amount1})
  
    // res.send("The amount is debited rupees from _ and creidet to rupess _ ")
  }

  
const setTranjection = async(req,res) => {
    try {
      const {id,coun,idm} = req.body;
      console.log(id);
      console.log(coun);
      console.log(idm);
    // const data = await user.findById(id);
    // const data2 = await user.findById(id2);
    const da = await user.findOne({id:id});
    const dat = await user.findOne({id:idm});
    console.log(da);
    console.log(dat);
    // console.log(da.name);
    // console.log(data2.name);
  //console.log(req.body);
    const userone = dat.name
  const   usertwo=dat.name
   const count= Number(coun)
    const newhist = new myhist({
        userone,
        usertwo,
        count,
    });
      await newhist.save();
     res.send(newhist);
    // await newTrans.save();
  } catch (e) {
    console.log(e);
  }
  }

  
const getTranjection = async (req,res) => {
    try {
      const data = await myhist.find();
      res.send(data);
      // console.log(data)
    } catch (e) {
      console.log(e);
      res.status(500).json();
    }
  }
  module.exports={Add,Costumer, Getbyid,Setdata,setTranjection,getTranjection};