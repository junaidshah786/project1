const Users = require("../models/userSchema");
const mongoose = require("mongoose");
//during set value in form onedit, _id not defined? because no form control for _id?
mongoose
  .connect(
    "mongodb+srv://junaidshah:eFEtmVFub2NHB6sK@cluster0.bfackoi.mongodb.net/UserDB"
  )
  .then(() => {
    console.log("connected to database Successfully");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  mongoose.set('strictQuery', false);

class Controller {
  static login(req, res) {
    Users.findOne({email:req.body.email,password:req.body.password}).then((docs)=>{
        if(docs==null){
            res.json({info:"No user Found",status:401})
        }
        else{
            res.json({info:'User logged in Successfully',status:201})
        }
    })
  }
  // create an instance of the blog model and save it to the MongoDB database. 
  static register(req, res) {
    Users.findOne({ email: req.body.email, password: req.body.password }).then(
    (documents) => {
        if (documents == null) {
          Users.create({//save or insert??????????????????????????//
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
          });
          res.json({ info: "User added successsfully", status: 201 });
        } else {
          res.json({ info: "User already Exists", status: 401 });
        }
      }
    );
  }

  static loadDatabase(req, res) {
    Users.find({},{__v:0}).then((docs)=>{
       res.json({documents:docs})
    })
  }

  static update(req, res) {//$set necessary???
    Users.updateOne({_id:req.query.userId},{password: req.body.password,firstName: req.body.firstName,lastName: req.body.lastName})
    .then((docs)=>{
            res.json({ info: "user updated successfully", status: 201 });
          })
  }

  static delete(req, res) {
    Users.deleteOne({email:req.query.userId}).then(()=>{
      res.json({ info: "user deleted successfully", status: 201 });
    })
  }

}

module.exports = Controller;

















// static register(req, res) {
//   Users.findOne({ email: req.body.email, password: req.body.password }).then((docs) => {
//       if (docs == null) {
//         Users.insertMany({//??????????????????????????????????????????????many
//           email: req.body.email,
//           password: req.body.password,
//           firstName: req.body.firstName,
//           lastName: req.body.lastName
//         })
//         res.json({ info: "User added successsfully", status: 201 });
//       } else {
//         res.json({ info: "User already Exists", status: 401 });
//       }
//     }
//   );
// }

  
  //   static login(req, res, next) {
  //     const exists = userDB.some((user) => {
  //       return req.body.email == user.email && req.body.password == user.password;
  //     });
  //     exists
  //       ? res.json({ info: "user logged in successfully", status: 201 })
  //       : res.json({ info: "invalid username/password", status: 401 });
  //   }


  // Users.find().select({email:1,password:1,_id:0}).then(documents=>{
  // Users.find().select('email password').then(documents=>{
  

  // static register(req, res){
  //     const exists = userDB.some((value) => {
  //         return req.body.email == value.email;
  //     })
  //     //!exists ? (userDB.push(req.body), res.json({ info: 'user registered successfully', status: 201 })) : res.json({ info: 'user already exists', status: 401 });
  //     if(!exists){
  //         const user=new Users({
  //             email:req.body.email,
  //             password:req.body.password,
  //             firstName:req.body.firstName,
  //             lastName:req.body.lastName
  //         });
  //         user.save();
  //         res.json({ info: 'user registered successfully', status: 201 })
  //         res.status(201).json({info:"User added successsfully"})
  //         console.log(user)
  //     }
  // }


  // static update(req, res) {
  //   Users.findOne({email:req.query.userEmail}).then((docs)=>{
  //     const output=(docs).overwrite({
  //       email: req.body.email,
  //       password: req.body.password,
  //       firstName: req.body.firstName,
  //       lastName: req.body.lastName});
  //       output.save()
  //       res.json({ info: "user updated successfully", status: 201 });

  //   })
  // }

  // static update(req, res) {
  //   userDB.splice(req.query.userId, 1, req.body);
  //   res.json({ info: "user updated successfully", status: 201 });
  // }

 
  // static delete(req, res) {
  //   userDB.splice(req.query.userId, 1);
  //   res.json({ info: "user deleted successfully", status: 201 });
  // }

