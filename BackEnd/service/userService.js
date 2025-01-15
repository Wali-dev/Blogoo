const { v4: uuidv4 } = require("uuid")
const User = require("../models/users.models")

module.exports.createUser = async (data) => {
    try {
        const newUser = await new User({
            username: data.username,
            email: data.email,
            personal_description: data.personal_description,
            userID: uuidv4(),
        })

        await newUser.save();
        return newUser;

    } catch (error) {
        console.log(error)
    }

}