const messageQueries = require("../db/queries.messages");

module.exports = {
    index(req, res, next){
        messageQueries.getAll((err, messages) => {
            if(err){
                req.flash("notice", "could not get messages");
                res.render("static/index", {messages})
            } else {
                res.render("static/index", {messages})
            }
        });
    },
    newMessage(req, res, next){
        messageQueries.createNew(req.body, req.user.id, (err, msg) => {
            if(err){
                req.flash("notice", "message not created");
                res.redirect("/");
            } else {
                res.redirect("/");
            }
        });
    }
}