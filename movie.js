import fs from 'fs'
function Movie(req,resp){
    try{
        const {MovieId,name,price}=req.body;
        let user=[];
        let ob={
            MovieId,
            name,price
        }
        if(fs.existsSync("movie.json")){
            const data=JSON.parse(fs.readFileSync("movie.json","utf-8"))
            let Isuser=data.some((value)=>value.MovieId==MovieId)
            if(Isuser){
                return resp.render('Movie is already exist')
            }
            else{
              user=data;
            }
        }
        user.push(ob)
        fs.writeFileSync("movie.json",JSON.stringify(user,null,2))
        resp.send("<h1>New Movie Is Added</h1>")

    }
    catch(error){
        resp.status(500).send("there is a problem in your code")
    }

}export default Movie;