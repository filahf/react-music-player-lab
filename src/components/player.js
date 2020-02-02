import {
  faBackward,
  faForward,
  faPause,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import song1 from "./../assets/demo.mp3";
import song2 from "./../assets/hey.mp3";
import song3 from "./../assets/summer.mp3";
import ProgressBar from "./progressBar";
import "./_player.scss";

var tracks = [song1, song2, song3];

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
var audioElement = document.createElement("audio");

let songIndex = 0;
loadSong(tracks[songIndex]);

function loadSong(song) {
  audioElement.src = song;
}
const track = audioCtx.createMediaElementSource(audioElement);

const gainNode = audioCtx.createGain();
track.connect(gainNode).connect(audioCtx.destination);

function Player() {
  var [playing, setPlaying] = useState(false);
  var [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => getPercentage(), 1);
    if (audioElement.ended) {
      setPlaying(false);
    }
  }, []);

  function getPercentage() {
    var percent = (audioElement.currentTime / audioElement.duration) * 100;
    setPercentage(percent);
  }

  const nextTrack = () => {
    songIndex++;

    if (songIndex > tracks.length - 1) {
      songIndex = 0;
    }
    loadSong(tracks[songIndex]);
    audioElement.play();
    setPlaying(true);
  };

  const prevTrack = () => {
    songIndex--;

    if (songIndex < 0) {
      songIndex = tracks.length - 1;
    }
    loadSong(tracks[songIndex]);
    audioElement.play();
    setPlaying(true);
  };

  const toggle = () => {
    if (playing === false) {
      setPlaying(true);
      audioElement.play();
    } else {
      setPlaying(false);
      audioElement.pause();
    }
  };

  return (
    <div>
      <div className="card">
        <p>Track {songIndex + 1} </p>
        <ProgressBar percentage={percentage} />
        <div className="controls">
          <div className="button" onClick={prevTrack}>
            <FontAwesomeIcon icon={faBackward} color="white" />
          </div>
          {playing !== false ? (
            <div className="button" onClick={toggle}>
              <FontAwesomeIcon icon={faPause} color="white" />
            </div>
          ) : (
            <div className="button" onClick={toggle}>
              <FontAwesomeIcon icon={faPlay} color="white" />
            </div>
          )}
          <div className="button" onClick={nextTrack}>
            <FontAwesomeIcon icon={faForward} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
