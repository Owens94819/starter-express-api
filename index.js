
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('ffmpeg-static')
//const ffprobePath = require('ffprobe-static').path

ffmpeg.setFfmpegPath(ffmpegPath)
//ffmpeg.setFfprobePath(ffprobePath)

console.log(require('ffmpeg-static').path,"new");

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
 const options = raw;

https.request(options, (req) => {
  console.log(`statusCode: ${req.statusCode}`);
    //res.status(req.statusCode);
    //res.setHeader('content-type',req.headers['content-type'])
    //req.pipe(res);
    res.send("OK_1");
    
})
.on('error', (error) => {
  console.error(error);
})
.end();

  })
