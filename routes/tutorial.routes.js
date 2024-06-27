module.exports = app=>{

    const tutorials = require('../controllers/tutorial.controller.js')
    var router = require('express').Router();
    router.post('/',tutorials.create);
    router.put("/:id",tutorials.update)
    router.get("/all",tutorials.findAll)
    app.use('/api/adel/fetouni',router)
}

//to do update put
//http://localhost:8080/api/adel/fetouni/6674ab7f97ec4a2076a4c44d
//and puting data in body raw json

// to do create post
//http://localhost:8080/api/adel/fetouni
//and putting data in body raw json