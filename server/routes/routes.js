
module.exports = function(app) {
    const people = require('../controllers/people.controller');
    app.get("/", people.index)

    app.get("/new/:name/", people.addPerson)

    app.get("/remove/:name/", people.deletePerson)

    app.get("/:name", people.viewPerson)
}