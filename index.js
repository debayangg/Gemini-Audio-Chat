//writing code necessary for express to run and parse JSON
const express = require("express");
require('dotenv').config();
const cors = require('cors');
const google_tts = require('google-tts-api');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

let app = express();
app.use(express.json());
app.use(cors());

let port = process.env.PORT || 3000;
const server = app.listen(port,() => {
});

//setting up the route for the home page
app.get("/", (req,res) => {
    res.sendFile( __dirname + '/index.html');
});

//setting up the route for the post request to get output from Gemini

app.post("/post", async (req,res) => {
    let data = req.body;

    /*
    Creates a request to Google's API to get the output from Gemini Pro model
    */

    const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(data.text);
    const response = await result.response;

    
    let text = response.text();
    const urls = await google_tts.getAllAudioBase64(text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
    });
 
   res.json({
        'result': urls
    });
     
    res.end();
});

app.closeServer = function(){
    server.close();
};

module.exports = app;
