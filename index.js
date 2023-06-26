//writing code necessary for express to run and parse JSON
import express from "express";
import 'dotenv/config';
import cors from 'cors';
import * as google_tts from 'google-tts-api';



let app = express();
app.use(express.json());
app.use(cors());
//setting up the local server
let port = 3000;
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});


//setting up the route for the home page
const __dirname = "https://debayangg.github.io/GPT-Bot/";

//setting up the route for the home page
app.get("/", (req,res) => {
    console.log(__dirname);
    res.sendFile( __dirname + '/index.html');
});

//Setting up gpt-3.5-turbo
import {Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

//setting up the route for the post request to get output from GPT

app.post(__dirname+"/post", async (req,res) => {
    let data = req.body;

    /*
    Creates a request to openai's API to get the output from GPT-3.5-turbo
    completion - stores json from api call
    */

    const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: data['text']}],
    });
    
    let text = completion.data.choices[0].message['content'];
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

app.post('/:route(post)', async (req,res) => {
    let data = req.body;

    /*
    Creates a request to openai's API to get the output from GPT-3.5-turbo
    completion - stores json from api call
    */

    const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: data['text']}],
    });
    
    let text = completion.data.choices[0].message['content'];
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

app.post(__dirname+"post", async (req,res) => {
    let data = req.body;

    /*
    Creates a request to openai's API to get the output from GPT-3.5-turbo
    completion - stores json from api call
    */

    const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: data['text']}],
    });
    
    let text = completion.data.choices[0].message['content'];
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

app.post("/", async (req,res) => {
    let data = req.body;

    /*
    Creates a request to openai's API to get the output from GPT-3.5-turbo
    completion - stores json from api call
    */

    const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: data['text']}],
    });
    
    let text = completion.data.choices[0].message['content'];
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