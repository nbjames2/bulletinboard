const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Message = require("../../src/db/models").Message;

describe("User", () => {

    beforeEach((done) => {
        this.user;
        sequelize.sync({force: true})
        .then(() => {
            User.create({
                email: "bill@example.com",
                password: "123456789"
            })
            .then((user) => {
                this.user = user;
                done();
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
            done();
        });
    });

    describe("#create()", () => {

        it("should create a Message object with a valid userId and body", (done) => {
            Message.create({
                userId: this.user.id,
                body: "blah blah"
            }) 
            .then((message) => {
                expect (message.body).toBe("blah blah");
                expect(message.userId).toBe(this.user.id);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });

        it("should not create a Message with invalid body", (done) => {
            Message.create({
                userId: this.user.id
            })
            .then((user) => {
                done();
            })
            .catch((err) => {
                expect(err.message).toContain("Message.body cannot be null");
                done();
            });
        });

    });
});