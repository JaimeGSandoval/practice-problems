function createUser(user) {
  return {
    ...user,
    id: Date.now(),
    createdAt: new Date(),
    updateAt: new Date()
  }
}

function updateUser(user) {
  return {
    ...user,
    updatedAt: new Date()
  }
}

modules.exports = { createUser, updateUser };
