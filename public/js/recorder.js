var audioChunks;
var rec;
record.onclick = e => {
    console.log('I was clicked')
    record.disabled = true;
    record.style.backgroundColor = "blue"
    stopRecord.disabled = false;
    audioChunks = [];
    rec.start();
}
stopRecord.onclick = e => {
    console.log("I was clicked")
    record.disabled = false;
    stop.disabled=true;
    record.style.backgroundColor = "red"
    rec.stop();
}

navigator.mediaDevices.getUserMedia({audio:true}).then(stream => {handlerFunction(stream)})

function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if(rec.state == "inactive"){
            let blob = new Blob(audioChunks, {type:'audio/mpeg-3'})
            recordedAudio.src = URL.createObjectURL(blob);
            recordedAudio.controls=true;
            recordedAudio.autoplay=true;
            sendData(blob)
        }
    }
}

var ffmpeg = require('ffmpeg');
try {
    var process = newffmpeg('path/to/blob/file');
    process.then(function(audio) {
        audio.fnExtractSoundToMP3('path/to/new/file/mp3', function(error, file) {
            if(!error)
                console.log('Audio file: ' + file);
        });
    }, function(err) {
        console.log('Error: ' + err);
    });
}
catch (e) {
    console.log(e.code);
    console.log(e.msg);
}