//Modules
const express = require("express");
const path = require("path");

//Init
const app = express();
const PORT = process.env.PORT || 3000 || 80;

//Error catching
app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is successfully running, and App is listening on port " + PORT);
    }
    else{
        console.log("Error occured, server can't start", error);
    }
}
);
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

//Routes
const userRoute = require('./routes/userLanding');
const userDiscover = require('./routes/discover');
const recipe = require('./routes/recipe');
const userRecipes = require('./routes/userRecipes');
const addRecipe = require('./routes/addRecipe')

app.use("/home", userRoute);
app.use("/discover", userDiscover);
app.use("/recipe", recipe);
app.use("/userRecipes", userRecipes);
app.use("/addRecipe", addRecipe);

//Setting up statics
app.use(express.static(path.join(__dirname, 'public')));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join('views'));

//Default page
app.get('/', (req, res) => {
    res.render('index', { name: 'Guest' });
});

app.post('/', (req, res) => {
    const { parcel } = req.body;
});

