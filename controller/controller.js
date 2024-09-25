const info = require('../models/UserInformation');


const m = {
    index:(req, res) => {
        res.render('index');
    },

    save:(req, res) => {
        const data = req.body;
        info.save(data, (err)=>{
            if(err) throw err;
            res.redirect('/');
        })
    },

    information:(req, res) => {
        info.getAllInformation((err, results)=>{
            if(err) throw err;
            res.render('info', {information:results});
        })
    }
};





module.exports = m;