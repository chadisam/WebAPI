const db = require('../models')
const Tutorial = db.tutorials;

exports.create = (req,res) =>{
    const tutorial = new Tutorial({
        title:req.body.title,
        description:req.body.description,
        published: req.body.published ? req.body.published:false

    })
    tutorial
        .save(tutorial)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || 'Oops!! An eror has occured'
            })
        }) 
}

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req,res) =>{}
exports.update = (req, res) => {
   
    const id = req.params.id;
  
    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };
exports.delete = (req,res) =>{}
exports.deleteAll = (req,res) =>{}
exports.findAllPublished = (req,res) =>{}