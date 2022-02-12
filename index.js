const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDb = require('./seed');
const blogRouter = require('./routes/blog');
const path = require('path');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))


mongoose.connect('mongodb://localhost:27017/blogApp',{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
.then(()=>{
console.log("Db connected");
})
.catch((errr)=>{
    console.log(err);
})



app.get("/", (req, res) => {
  res.redirect("/blogs");
});


app.use(blogRouter);


// seedDb()






app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
