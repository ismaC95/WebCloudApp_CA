// src/data/Users.js

const users = [];

export function addUser(user) {
  users.push(user);
  console.log('User added:', user);
}

export function getUsers() {
  return users;
}
