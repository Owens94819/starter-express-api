
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('ffmpeg-static')
//const ffprobePath = require('ffprobe-static').path

ffmpeg.setFfmpegPath(ffmpegPath)
//ffmpeg.setFfprobePath(ffprobePath)

//console.log(require('ffmpeg-static').path,"new");


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
    res.setHeader('content-type',"text/html")
   // const inputStream = fs.createReadStream('path/to/input/video.mp4');
//const outputStream = fs.createWriteStream('path/to/output/compressed.mp4');
const Writable  = require('stream').Writable;

const outStream = new Writable({
  write: function(chunk, encoding, callback) {
    console.log("incoming output...",chunk.toString(). length);
    callback();
  }
});

const crfValue = 28;
const videoBitrate = '500k';
const audioBitrate = '128k';

ffmpeg(req)
  .output(res)
  .videoCodec('libx264')
  .size('50%')
  //.videoFilters('scale=trunc(iw/2)*2:trunc(ih/2)*2')
  .audioCodec('aac')
  .audioBitrate(audioBitrate)
  .outputOptions([
    `-b:v ${videoBitrate}`,
    `-crf ${crfValue}`
  ])
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Compression finished');
  })
  .run();
//res.send("OK_3");
})
.on('error', (error) => {
  console.error(error);
})
.end();

  })
