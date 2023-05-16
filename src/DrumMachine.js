import React, { useState, useEffect } from "react";
import { objects } from "./Helper";

export default function DrumMachine() {
  const [instrumentPlaying, setInstrumentPlaying] = useState("");

  function instancesOfSound(element) {
    const audio = document.getElementById(element.letter);
    setInstrumentPlaying(`${element.sound}`);
    audio.currentTime = 0;
    audio.play();
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const toUpper = event.key.toUpperCase();
      const filtered = objects.filter((element) => element.letter === toUpper);
      if (filtered.length !== 0) instancesOfSound(filtered[0]);
    });
  }, []);

  return (
    <div
      id="drum-machine"
      className=" container border border-secondary border-end rounded-3 position-absolute top-50 start-50 translate-middle"
      style={{ maxWidth: "45rem",background:'linear-gradient(225deg, rgba(84,141,232,1) 36%, rgba(209,6,244,1) 71%)' }}
    >
      <div className="row align-items-start" >
        <div
          id="display"
          className="col  text-center "
          style={{ maxWidth: "15rem" }}
        >
         { instrumentPlaying===''? null:<strong>
            <p
              className="text-center fs-4 border border-secondary bg-dark text-light"
              style={{ translate: "0 300%" }}
            >
              {instrumentPlaying}
            </p>
          </strong>}
        </div>
        <div className="col border border-start d-flex p-2 flex-wrap justify-content-center">
          {objects.map((e) => {
            return (
              <div
                key={e.keyCode}
                style={{ minWidth: "5rem" }}
                onClick={() => {
                  instancesOfSound(e);
                }}
                className="drum-pad btn btn-dark mx-4 my-4"
                id={e.sound}
              >
                {e.letter}
                <audio className="clip" src={e.audio} id={e.letter}></audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
