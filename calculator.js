

const express = require("express");
const bodyParser = require("body-parser");

//  app refers to express module
const app = express();
app.use(bodyParser.urlencoded({extended: true}))  //this line is always used when you use body-Parser

app.get("/", function(req, res){
  // res.send("<p> my first draft calculator</p>");
  // res.sendFile("index.html");// we could say this to give the directory of our HTML file

  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");//But this one is syfer becuase it gives the path of the current file no matter where it is
  //             dir= directory, name is name
});

//
app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  // res.send("Thank you for posting somthing");
  res.send("The result of the calculation is " + result);
});



// //////////////////////////
app.get("/bmicalculator", function(req, res){
  // res.send("<p> my first draft calculator</p>");
  // res.sendFile("index.html");// we could say this to give the directory of our HTML file

  // console.log(__dirname);
  res.sendFile(__dirname + "/bmicalculator.html");//But this one is syfer becuase it gives the path of the current file no matter where it is
  //             dir= directory, name is name
});

app.post("/bmicalculator", function(req, res){

  // var weight = Number(req.body.weight);
  var weight = parseFloat(req.body.weight);
  var hight = parseFloat(req.body.hight);

  var result_1 = weight / (hight * weight);

  // res.send("Thank you for posting somthing");
  res.send("YOUR BMI is " + result_1);
});



app.listen(3000, function(){
  console.log("Server is runing on port 3000");
});
