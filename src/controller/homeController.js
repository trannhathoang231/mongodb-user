import User from "../models/User";

let getHomepage = (req, res) => {
    User.find({}, function (err, users) {
        //nếu có lỗi
        if (!err) {
            res.render("index.ejs", { dataUser: users });
        } else {
            res.status(400).json({ error: "ERROR!" });
        }
    });
};

module.exports = {
    getHomepage,
};
