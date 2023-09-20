var dbConn = require('../../config/db.config')

var Avatar = function (Avatar) {
    this.id = Avatar.id;
    this.username = Avatar.username;
    this.auth0_id= Avatar.auth0_id;
};

Avatar.create = function (req, result) {
    dbConn.query("INSERT INTO players ( username, auth0_id,) VALUES (?, ?)", function (err, res) {
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

Avatar.delete = function (id, result) {
    dbConn.query("DELETE FROM players WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Avatar;