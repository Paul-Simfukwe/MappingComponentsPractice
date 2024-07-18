import React from "react";
import emojipedia from "../emojipedia";

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map((entry) => (
        <dl className="dictionary" key={entry.id}>
          <div className="term">
            <dt>
              <span className="emoji" role="img">
                {entry.emoji}
              </span>
              <span>{entry.name}</span>
            </dt>
            <dd>{entry.meaning}</dd>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default App;
