const fs = require('fs/promises');
const { AipSuccess, ApiError } = require('../utility/util');

const createNewUser = (req, res) => {

}

const users = async (req, res) => {
    try {
        const userData = await fs.readFile('./data/user.json', 'utf-8');
        let resp = JSON.parse(userData);
        return res.status(200).send(new AipSuccess(200, 'List of all users', resp));
    } catch (error) {
        return res.status(500).send(new ApiError(500,"File does not exist", error))
    }
}

module.exports = {
    createNewUser,
    users
}