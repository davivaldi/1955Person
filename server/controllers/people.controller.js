const People = require("../models/people.models");

exports.index = function(req,res) {
    People.find()
    .then(people => res.json(people) )
    .catch(err => res.json(err));
}

exports.addPerson = function(req,res) {
    console.log(req.params);
    const person = new People();
    person.name = req.params.name;
    person
    .save()
    .then(NewPerson => res.json(NewPerson))
    .catch(err =>res.json(err));    
}

exports.deletePerson = function(req,res) {
    console.log("i Made it to the destruction");
    People.remove({name: req.params.name})
    .then(data => res.json(data))
    .catch(err => res.json(err));  
}

exports.viewPerson = function(req,res) {
    People.findOne({name: req.params.name})
    .then(data => res.json(data))
    .catch(err => res.json(err)); 
}