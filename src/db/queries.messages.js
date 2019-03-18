const Message = require("./models").Message;

module.exports = {
    getAll(callback){
        Message.findAll()
        .then((messages) => {
            callback(null, messages);
        })
        .catch((err) => {
            callback(err);
        });
    },
    createNew(body, userId, callback){
        Message.create({
            userId: userId,
            body: body.message
        })
        .then((msg) => {
            callback(null, msg);
        })
        .catch((err) => {
            callback(err);
        })
    }
}