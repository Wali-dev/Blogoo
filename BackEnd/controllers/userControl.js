

const { createUser } = require("../service/userService")

const getAlluser = (req, res) => {
    res.send("This is the all user route")
}

const getOneuser = (req, res) => {
    res.send("This is the One user route")
}

const createOneUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.send(user);
    } catch (error) {
        res.send(error);

    }
}


module.exports = {
    createOneUser,
    getOneuser,
    getAlluser
}