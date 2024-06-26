const express = require('express');
const cors = require('cors');

const app= express();
const db = require('./models'); 
//by default in the models there is a file index.js so even if we didn't specify it will take directly the file that's called index 
// the same as const db = require('./models/index.js'); 

db.mongoose
    .connect(db.url,{})
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch(err=>{
        console.log('Cannot connect to DB',err)
        process.exit();  //to stop the application

    })

var corsOptions= {
    origin:['http://localhost:8081','http://127.0.0.1:5500','https://chadisam.github.io']

}
app.use(cors(corsOptions));
//to be able to send JSON
app.use(express.json());
//to let send json in body
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.json({message:'Welcome to our page'})
})

require('./routes/tutorial.routes')(app);

//to let port. what render has available port in env let 
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`)
})