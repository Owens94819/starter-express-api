/*
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
console.log(ffmpeg.path, ffmpeg.version);
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath.path);
const ffmpegStatic = require('ffmpeg-static');

//const ffmpeg = require('fluent-ffmpeg');
// Tell fluent-ffmpeg where it can find FFmpeg
//ffmpeg.setFfmpegPath(ffmpegStatic);

*/

const https = require('https');
const express = require('express');
const app=express();
const server = app.listen(process.env.PORT || 12345, () => {
    var port = server.address().port;
    console.log(`http://localhost:${port}\n-----------`);
  });
  const user="owens94819";
  const repo="owens94819";
  const branch="main";
  const path="JavaScript VUE TUTORIAL in 60 Seconds_ ----‍-- _shorts(480P).mp4";
  app.use("/upload",function(req,res) {
    console.log("we got some data");
    res.send("OK");
  });
  
  app.use("/compress",function(req,res) {
    // body...
 const raw=`https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`
//const inputFileUrl = 'https://example.com/inputfile.mp4';
//const outputFileUrl = 'https://example.com/outputfile.mp4';
const inputFileUrl = raw;
const outputFileUrl = 'https://compress.cyclic.app/upload';
const targetResolution = '50%'; // target resolution, in this case 640x360

const options = {
  hostname: 'ffmpeg-online.com',
  path: '/api/compress',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const request = https.request(options, (response) => {
  console.log(`statusCode: ${response.statusCode}`);
  
  response.on('data', (data) => {
    console.log(JSON.parse(data));
  });
});

request.on('error', (error) => {
  console.error(error);
});

const requestData = {
  input: inputFileUrl,
  output: outputFileUrl,
  resize: targetResolution
};

request.write(JSON.stringify(requestData));
request.end();

  })