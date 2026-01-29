import fs from "fs"
//import{use}from "react";
function registerUser(name, email, password){
    try{
        let user=[];
        let ob={
            id:new Date(), name,email,password,todo:[]
        }
        if(fs.existsSync("todo.json")){

            let data=JSON.parse(fs.readFileSync("todo.json","utf-8"))
            let isUser=data.some((value)=>value.email===email)
            if(isUser){
                return "user exit"
            }
            user=data;
            
        }
        user.push(ob)
        fs.writeFileSync("todo.json",JSON.stringify(user,null,2))
        console.log("user crete");
       
        } catch(error){
        console.log(error);
    }
}
export default registerUser;