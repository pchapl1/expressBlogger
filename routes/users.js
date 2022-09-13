const { json } = require('body-parser');
var express = require('express');
var router = express.Router();
var { validateUserData } = require('../validation/users.js')


const userList = []
/* CREATE new user */
router.post('/create-one', (req, res, next) => {

  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const age = req.body.age  
  const favoriteFoods = req.body.favoriteFoods

  const userData = {
    email,
    firstName,
    lastName,
    age,
    favoriteFoods,
    fullName : firstName + lastName,
    createdAt : new Date(),
    lastModified : new Date(),
  }

  const userDataCheck = validateUserData(userData)
  console.log(userDataCheck.isValid)
  if (userDataCheck.isValid === false ) {
    console.log('here')
    res.json({
      success: false,
      message : userDataCheck.message
    })
    return
  } 

  userList.push(userData)

  res.json({
    success: true
  })


})

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET single user */
router.get('/single', (req, res) => {
  res.json({
    success: true,
    user: 'Single User'
  })
})

module.exports = router;
