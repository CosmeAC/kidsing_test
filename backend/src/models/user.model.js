'use strict';
var dbConn = require('../../config/db.config')
//User object create
var User = function (User) {
    this.id = User.id;
    this.username = User.username;
    this.email = User.email;
    this.auth0_id= User.auth0_id;
};

User.create = function (req, result) {
    const { id, username, email } = req.body;
    const values = [id, username, email];
    console.log(values)

    dbConn.query("INSERT INTO users (auth0_id, username, email) VALUES (?, ?, ?)",  values, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = function (id, result) {
    dbConn.query("Select * from User where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('User : ', res);
            result(null, res);
        }
    });
};

User.update = function (id, User, callback) {
    dbUser.query("UPDATE User SET username=?,email=?,auth0_id=? WHERE id = ?", [User.username, User.email, User.auth0_id, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            callback(null, err);
        } else {
            callback(null, res);
        }
    });
};
User.delete = function (id, result) {
    dbConn.query("DELETE FROM User WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = User;