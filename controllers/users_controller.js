module.exports.profile = function(req,res){
   return res.render('user_profile',{
      title: "Profile"
   });
}

//render the sign up page
module.exports.signUp = function(req,res){
   return res.render('user_sign_up',{
      title: "Codeial | Sign Up"
   });
}

//render the sign in page
module.exports.signIn = function(req,res){
   return res.render('user_sign_in',{
      title: "Codeial | Sign In"
   });
}

//get the sign up data
module.exports.create = function(req,res){

};

//sign in and create the session for user
module.exports.createSession = function(req,res){
   
}