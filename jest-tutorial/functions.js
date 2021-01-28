// const { default: axios } = require("axios");

const functions = {

  add: (num1, num2) => {
    return num1 + num2;
  },

  isNull: () => {
    return null;
  },

  checkValue: (val) => {
    return val;
  },

  createUser: () => {
    const user = { firstName: 'Sasuke' };
    user['lastName'] = 'Uchiha';
    return user;
  },

  // fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
  //   .then(res => res.data)
  //   .catch(err => err)
}

module.exports = functions;
