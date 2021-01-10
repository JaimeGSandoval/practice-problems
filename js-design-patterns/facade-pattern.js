// The facade pattern is a simple pattern. It provides only an alternative interface to an object. It's a good design practice to keep your methods short and not have them handle too much work. Following this practice you'll end up with a greater number of methods. Sometimes two or more methods may commonly be called together. In such cases it makes sense to create another method that wraps the repeating method calls.

// The idea of the facade pattern is to make it easy for your code to change in the future. You create a facade between your complex code and your actual business code that you're writing

// In general, the idea of thw facade pattern is to take some form of API that's either difficult to use or ugly, and create a nice API out of it. In this example we create a nice getFetch function out of the ugly fetch API that the browser gives you. You can then use that nice API everywhere you were going to use the fetch API. Makes refactoring easier because we only have to change out code in one place


//  WITHOUT THE FACADE PATTERN
// function getUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   }).then(res => res.json());
// }

// function getUserPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   }).then(res => res.json());
// }

// getUsers().then(users => {
//   users.forEach(user => {
//     getUserPosts(user.id).then(posts => {
//       console.log(user.name);
//       console.log(posts.length);
//     })
//   })
// })


// WITH THE FACADE PATTERN
function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users');
}

function getUserPosts(userId) {
  return getFetch('https://jsonplaceholder.typicode.com/posts', {
    userId: userId
  });
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name);
      console.log(posts.length);
    })
  })
})

function getFetch(url, params = {}) {
  const queryString = Object.entries(params).map(param => {
    return `${param[0]}=${param[1]}`;
  }).join('&');

  return fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
}


// Example of showing how easy it is to change code with facade pattern. Here code uses axios for the API call
// function getFetch(url, params = {}) {
//   return axios({
//     url: url,
//     method: "GET",
//     params: params
//   }).then(res => res.data)
// }
