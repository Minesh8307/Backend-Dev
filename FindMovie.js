import fs from 'fs';

function findM(req, resp) {
    try {
        const { MovieId } = req.body;

        if (!fs.existsSync("movie.json")) {
            return resp.status(400).send("No movie data is present");
        }
        const fileContent = fs.readFileSync("movie.json", "utf-8");
        const data = JSON.parse(fileContent);

        let idx = data.findIndex(val => val.MovieId == MovieId);

        if (idx === -1) {
            return resp.status(404).send("Movie is not found");
        }
        let data1 = data[idx];
        return resp.render('findMovie', { name: data1.name });
    } catch (error) {
        console.error(error); 
        resp.status(500).send("There is an error in your code");
    }
}

export default findM;