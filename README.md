# MusicJam
The purpose of this project is to create a prototype of a video conference app for music students and musicians. Music students can use this app to play music together virtually, and a metronome and audio recording feature is included in the app. This project is built on a video conferencing app from https://github.com/lucaslouca/video-conference-webrtc.
Note: Whenever a new user joins the meeting, reload the page to show them.

Winner of GTA Hacks Hackathon: Community theme,
[Devpost Link](https://devpost.com/software/musicjam)

## What the app does
This sample code demonstrates a client/server architecture running on <a href="https://nodejs.org" target="_blank">Node.js</a>, that enables users to setup up a video conference. The app makes use of <a href="http://socket.io" target="_blank">Socket.IO</a> and <a href="http://www.webrtc.org" target="_blank">WebRTC</a>.

When a peer visits <a href="http://127.0.0.1:1337/" target="_blank">http://127.0.0.1:1337/</a>, a new room url is generated, which can then be used to invite others to the video conference.

Below is a screenshot of a sample room (<a href="http://127.0.0.1:1337/jk4qhh" target="_blank">http://127.0.0.1:1337/jk4qhh</a>) with four users participating in a video conference:<br>
<img src="https://cloud.githubusercontent.com/assets/10542894/7550897/538ec66a-f674-11e4-9f52-b0f5a5b9911d.png" width="450"/>

At the moment WebRTC is supported only by a limited number of browsers: Chrome, Firefox and Opera.

## How to run the code
1. Clone the repo: `$ git clone https://github.com/jpolina/MusicJam
2. `$ cd MusicJam `
3. `$ npm install` (you may need root access)
4. `$ node server.js`
5. Access the app from a WebRTC capable webbrowser through <a href="http://127.0.0.1:1337/" target="_blank">http://127.0.0.1:1337/</a>

