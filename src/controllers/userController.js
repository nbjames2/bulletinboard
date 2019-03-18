const userQueries = require("../db/queries.users");
const passport = require("passport");

module.exports = {
    signinForm(req, res, next) {
        res.render("users/signin");
    },
    signin(req, res, next) {
        passport.authenticate("local")(req, res, function () {
            if(!req.user){
                req.flash("notice", "Sign in failed. Please try again.");
                res.redirect("/users/signin");
            } else {
                req.flash("notice", "You've successfully signed in!");
                res.redirect("/");
            }
        });
    },
    signupForm(req, res, next) {
        res.render("users/signup");
    },
    signup(req, res, next) {
        let user = {
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
        };
        userQueries.createUser(user, (err, user) => {
            if(err){
                req.flash("error", err);
                res.redirect("/users/signup");
            } else {
                passport.authenticate("local")(req, res, () => {
                    req.flash("notice", "You've successfully signed in!");
                    res.redirect("/");
                });
            }
        }); 
    }
}