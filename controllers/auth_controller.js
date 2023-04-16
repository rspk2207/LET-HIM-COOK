const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const auth_controller = {
    getSignUp:
        (req,res) => {
            res.render('signup');
        },
    getSignIn:
        (req,res) => {
            res.render('signin');
        },
    validateSignUp:
    (req,res) => {
        console.log(req.body);
        const {name, email, contactNumber, password, verifypassword} = req.body;
        let errors = [];
        if(!name || !email || !password || !verifypassword)
        {
            errors.push({err: "Please fill in mandatory details"});
            console.log(name,email,password,verifypassword);
        }
        if(password != verifypassword)
        {
            errors.push({err:"Password fields do not match"});
        }
        
        if( !password || password.length < 8 )
        {
            errors.push({err: "Password length should atleast be 8"});
        }
        
        if(errors.length > 0)
        {
            console.log(errors);
            res.redirect('/auth/signup');
        }
        else
        {
            User.findOne({email: email})
            .then(user => {
                if(user)
                {
                   res.send("User already exists"); 
                }
                else
                {

                    const newUser = new User({
                        name: name,
                        password: password,
                        email: email,
                        contactNumber: contactNumber
                    });

                    bcrypt.genSalt(10, (err,salt) => 
                    bcrypt.hash(newUser.password,salt, (err,hash) =>
                    {
                        if(err)
                        {
                            console.log("Error in salting password");
                            throw err;
                        }
                        newUser.password = hash;
                        newUser.save()
                        .then(user =>{
                            console.log(user);
                        })
                        .catch(err => console.log(err));
                        res.send("No errors in signup");
                    }))
                }
            })
        }
    },
    validateSignIn:
    (req,res,next) => {
        passport.authenticate('local',{
            successRedirect: '/auth/verify',
            failureRedirect: '/auth/signin',
            successMessage:{message: 'signin success'},
            failureMessage:{message:'signin failed ra bunda'}
        }) (req,res,next);

    },
    verify:
    (req,res) => {
        console.log(req.user);
        res.render('layout',{user: req.user});
    }
}

module.exports = auth_controller;