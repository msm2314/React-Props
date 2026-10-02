import React from "react";

function App(a) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{a.name}</h2>
          <img src={a.imgURL} alt="avatar_img" className="circle-img" />
        </div>
        <div className="bottom">
          <p className="info">{a.phone}</p>
          <p className="info">{a.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
