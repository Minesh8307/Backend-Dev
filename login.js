import fs from 'fs'
function login(req,resp){
    try{
        const {userId,name}=req.body;
        if(fs.existsSync("user.json")){
            const data=JSON.parse(fs.readFileSync("user.json","utf-8"))
            let Isuser=data.some((value)=>value.userId==userId&&value.name==name)
            if(Isuser){
                return resp.render('home')
            }
            else{
              resp.send("user is not registered")
            }
        }
       
    }
    catch(error){
        resp.status(500).send("there is a problem in your code")
    }

}export default login;