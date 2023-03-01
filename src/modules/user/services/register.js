const { User } = require('../../../database/models');


exports.register = async (user) => {
    const newUser = new User(user);
    const response = await newUser.save();
    return {
        id: response._id,
        name: response.name,
        email: response.email,
    };
};