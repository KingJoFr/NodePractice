const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");


});

app.get("/about", function(req, res){
    res.send("Hi my name is King.  I'm a pharmacy tech studying software development.  Thanks for checking out my page.");
});

app.post("/bmiCalculator.html", function(req, res){

    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight/(height^2);
    res.send("Your bmi is: ", bmi);

})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});