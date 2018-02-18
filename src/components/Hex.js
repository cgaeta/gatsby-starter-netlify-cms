import React from 'react';

const sixtyDeg = Math.PI / 3;

const Hex = ({src, title, text, n}) => {
  
  return (
  <div className="hex" style={{
    position: "relative",
    outline: "1px solid transparent",
    width: `calc(100% / 2)`,
    visibility: "hidden"
  }}>
    <div className="hexIn" style={{
      position: "absolute",
      width: "96%",
      paddingBottom: `calc(96% / ${Math.sin(sixtyDeg)})`,
      margin: "0 2%",
      overflow: "hidden",
      visibility: "hidden",
      transform: "rotate3d(0,0,1, -60deg) skewY(30deg)",
      outline: "1px solid transparent"
    }}>
      <div className="hexLink" style={{
        position: "absolute",
        visibility: "visible",
        outline: "1px solid transparent",
        display: "block",
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: "#ffffff",
        overflow: "hidden",
        transform: "skewY(-30deg) rotate3d(0,0,0,60deg)"
      }}>
        <img src={src} style={{
          position: "absolute",
          visibility: "visible",
          left: "-100%",
          right: "-100%",
          width: "auto",
          height: "auto",
          margin: "0 auto",
          transform: "rotate3d(0,0,0,0deg)"
        }} alt />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
    <div className="hexAfter" style={{
      display: "block",
      paddingBottom: `calc(100% / ${Math.tan(sixtyDeg)})`
    }}>
    </div>
  </div>
)};

export default Hex;
