const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Feedback = require("../models/Feedback");

router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    //  console.log(req)
    await Feedback.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

// router.get('/feedback',ensureAuth,(req,res)=>{
//     res.render('developer')
// })
// router.post('/',ensureAuth,async(req,res)=>{
//     try {
//         req.body.user=req.user.id;
//         await Feedback.create(req.bodydev)
//         res.redirect('/dashboard')
//     } catch (err) {
//         console.error(err);
//         res.render('error/500')
//     }
// })

module.exports = router;
