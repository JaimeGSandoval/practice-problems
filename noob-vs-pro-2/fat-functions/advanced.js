const { updateUser, createUser } = require('./api/users.js');


function saveUser(user) {
  if (user.id == null) {
    console.log('Created user');
    createUser(user);
  } else {
    console.log('Updated User');
    updateUser(user);
  }
}

function validateUser(user) {
  return [
    ...validateUserName(user.username),
    ...validatePassword(user.password)
  ];
}

function validateUserName(username) {
  const errors = [];

  if (!username) {
    errors.push('username is required');
  }

  if (username != null && username.length < 3) {
    errors.push('Username must be 3 or more characters');
  }
  return errors;
}

function validatePassword(password) {
  const errors = [];

  if (!user.password) {
    errors.push('Password is required');
  }

  if (password != null && password.length < 8) {
    errors.push('Password must be 8 characters or more');
  }
}

const user = {
  username: null,
  password: ''
}

const errors = validateUser(user);

if (errors.length > 0) {
  errors.forEach(error => console.error(error));
  return;
}

saveUser(user);
