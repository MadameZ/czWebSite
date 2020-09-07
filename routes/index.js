var express = require('express');
var router = express.Router();


var userModel = require('../models/users')



  router.post('/sendContact', async function(req,res,next){

    var error = []
    var result = false
    var saveUser = null

  
    // const data = await userModel.findOne({
    //   email: req.body.emailFromFront
    // })
  
    // if(data != null){
    //   error.push('utilisateur déjà présent')
    // }
  
  // SI LES CHAMPS SONT VIDES :
    if(req.body.societyFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.firstNameFromFront == ''
    || req.body.lastNameFromFront == ''
    || req.body.messageFromFront == ''

    ){
      error.push('champs vides')
    }
  
  // SI IL N'Y A PAS D'ERREUR, ENREGISTRE DANS LA BDD :
    if(error.length == 0){
  
      var newUser = new userModel({

        society: req.body.societyFromFront,
        gender: req.body.emailFromFront,
        firstName: req.body.firstNameFromFront,
        lastName: req.body.lastNameFromFront,
        message: req.body.messageFromFront, 
      })
    
      saveUser = await newUser.save()

      console.log("req.body.societyFromFront: "+ req.body.societyFromFront)
    
      
      if(saveUser){
        result = true
      }
    }

    
  
    res.json({result, saveUser, error})
  })




module.exports = router;
