const db= require('../config/db');
const info = {
    save:(data, callback) =>{
        const query ="insert into users (firstname, lastname, gender, birthdate) values(?,?,?,?)";
        db.query(query, [data.firstname, data.lastname, data.gender, data.birthdate], callback);
    },
    getAllInformation:(callback) =>{
        const query = "SELECT * FROM users";
        db.query(query, callback);
    },

};

module.exports = info;