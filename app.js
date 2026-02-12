import express from 'express'
import path from 'path'
import User from './user.js'
// import userMid1 from "./userMID"
import find from './userFind.js'
import Movie from './movie.js'
import findM from './FindMovie.js'
import login from './login.js'
import userMid2 from './loginmid.js'
import booking from './booking.js'
const app=express()
const ab=path.resolve('web')
app.use(express.static(ab))
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get("/",(req,resp)=>{
    resp.render('login')
})
app.get("/addMovie",(req,resp)=>{
    resp.render('MovieH')
})
app.get("/findMovie",(req,resp)=>{
    resp.render('movieFH')
})
app.get("/register",(req,resp)=>{
    resp.render('add')
})
app.get("/bookMovie",(req,resp)=>{
    resp.render('book')
})

app.post("/login1",userMid2,login)
app.post("/findMovie1",findM)
app.post("/addMovie1",Movie)
app.post("/addingUser",User)
app.post("/booking",booking)
app.listen(2100)