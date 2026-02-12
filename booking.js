import fs from 'fs';

function booking(req, resp) {
    try {
        const { userId, movieId } = req.body;
    
        const userData = JSON.parse(fs.readFileSync("user.json", "utf-8"));
        const movieData = JSON.parse(fs.readFileSync("movie.json", "utf-8"));

        // ... after reading JSON files ...

// Use .toString() to make sure "5555" (string) matches 5555 (number)
const user = userData.find(u => u.userId.toString() === userId.toString());
const movie = movieData.find(m => m.MovieId.toString() === movieId.toString());

if (!user || !movie) {
    console.log("NOT FOUND! User:", !!user, "Movie:", !!movie);
    return resp.status(404).send("User or Movie not found in JSON");
}

// Map the data - Ensure these property names match your JSON keys exactly
const userType = user.type || "GUEST"; 
const ticketPrice = Number(movie.price) || 0; 
let finalPrice = ticketPrice;
let nameh=user.name;
// let nameH=user.name;

// Discount logic
if (userType.toUpperCase() === "VIP") {
    finalPrice = Math.ceil(ticketPrice * 0.88);
} else if (userType.toUpperCase() === "STANDARD") {
    finalPrice = Math.ceil(ticketPrice * 0.95);
}

// This should no longer say undefined!
console.log(nameh);

resp.status(201).render('bokking', { 
    type: userType, 
    final: finalPrice,
    name:nameh 
});

    } catch (error) {
        console.error(error);
        resp.status(500).send('There was an error in your booking');
    }
}

export default booking;