const express = require ('express')
const router= express.Router()
const {ensureAuth, ensureGuest }= require ('../middleware/auth')


const Blog = require('../models/Blog')
//@desc   Login/Landing PAge
//@route  GET/
router.get('/',ensureGuest,(req,res)=>{
    res.render('login',{
        layout:'login',
    })
})

// developer
router.get('/developer',async(req,res)=>{
    try{
         res.render('developer',{
        
       })  
     }
 catch(err){
     console.error(err);
     res.render('error/500')
 }
})
//@desc   DashBoard
//@route  GET/dashboard
router.get('/dashboard',ensureAuth,async(req,res)=>{
    try{
           const blogs = await Blog.find({user : req.user.id}).lean().sort({ createdAt: "desc" })
           res.render('dashBoard',{
           name : req.user.firstName,
           blogs
          })  
        }
    catch(err){
        console.error(err);
        res.render('error/500')
    }
   
   
})

module.exports= router