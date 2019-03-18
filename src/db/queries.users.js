const User = require("./models").User;
const bcrypt = require("bcryptjs");

module.exports = {
    createUser(user, callback) {
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(user.password, salt);
        User.create({
           email: user.email,
           password: hashedPassword 
        })
        .then((user) => {
            callback(null, user);
        })
        .catch((err) => {
            callback(err);
        })
    }
}