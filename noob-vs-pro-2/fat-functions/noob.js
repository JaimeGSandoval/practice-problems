const { updateUser, createUser } = require('./api/users.js');

function saveUser(user) {
  const error = [];

  if (user.username) {
    if (user.user.length < 3) {
      error.push('Username must be 3 or more characters')
    }
  } else {
    errors.push('Username is required')
  }

  if (user.password) {
    if (user.password.length < 8) {
      errors.push('Password must be over\' 8 characters');
    }
  } else {
    errors.push("Password is required");
  }

  if (errors.length > 0) {
    errors.forEach(error => console.log(error));
    return;
  }

  if (user.id == null) {
    console.log('Created User');
    createUser(user);
  } else {
    console.log('Updated user');
    updateUser(user);
  }
}

const usr = {
  username: 'James',
  password: 'password'
}

saveUser(user);
