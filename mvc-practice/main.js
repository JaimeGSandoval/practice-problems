// http://yourapp.com/users/profile/1

//  ROUTES
// users/profile/:id = Users.getProfile(id);

// CONTROLLERS
// class Users {
  // function getProfile(id) {
    // profile = this.UserModel.getProfile(id);

    // renderView('users/profile', profile)
  // }
// }

// MODELS
// Class UserModel {
  // function getProfile(id) {
    // data = this.db.get('SELECT * FROM users WHERE id = id');
    // return data;
  // }
// }

// VIEWS
// views
    // users
        // profile
        // <h1>{{profile.name}}</h1>
        // <ul>
            //<li> Email: {{profile.email}}</li>
            //<li> Phone: {{profile.phone}}</li>
        // </ul>
