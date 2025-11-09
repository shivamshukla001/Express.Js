const userCredentials = (req,res,next)=>{
    console.log("username: shivam");
    console.log("email: shivam.123");
    console.log("password: 123shivam");
    next();
}


export default userCredentials;