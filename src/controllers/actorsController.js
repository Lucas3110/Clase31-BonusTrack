const db = require('../database/models/index.js');

const actorsController = {
    list: function (req, res) {
        db.Actor.findAll()
            .then(actors => {
                res.render("actorsList", {actors: actors})
            })
    }

    /* me falta el detail */
    
}



module.exports = actorsController;