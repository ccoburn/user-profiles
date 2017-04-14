var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function (req, res, next) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.body.user.name && users[i].password === req.body.user.password) {
        req.session.currentUser = users[i];
        return res.status(200).send({ userFound: true});
      }
    }
    return res.send({ userFound: false })
  },
  delete: function (req, res, next) {
    console.log('thing', req.body.thing);
    console.log('user', req.session.currentUser.name);
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.session.currentUser.name) {

        for (var j = 0; j < users[i].friends.length; j++) {
          if (users[i].friends[j] === req.body.thing) {
            users[i].friends.splice(j, 1);
            

            console.log(users[i].friends);
          }
        }
      }
    }

        }




}
