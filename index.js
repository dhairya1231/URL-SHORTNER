const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/URLshortner")
app.use(express.json());
const shortner = require("./helper");
console.log(shortner)
const URL = require("./models/url");
app.listen(3000);

app.post("/shorten",async(req,res)=>{
    console.log("shortid");
    const aajao=req.body.url;
    const shortid=shortner(aajao);
    await URL.create({realid:aajao,shortid:shortid});
    console.log(shortid);
    res.send(shortid);
});
app.get("/:uhmm",async(req,res)=>{
    const umm=req.params.uhmm;
   const real= await URL.findOne({shortid:umm});
   if (!real) {
    return res.status(404).send("not found");
}
let redirectUrl = "https://" + real.realid;
    res.redirect(redirectUrl);
});
