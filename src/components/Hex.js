import React from 'react';

const sixtyDeg = Math.PI / 3;

//const Hex = ({src = "", title = "Test", text = "Hi", n = 5}) => {
const Hex = (props) => {

  let {entry} = props;
  let {data} = entry;
  //let {src, title, text, n} = data;
  let src = "",
      title = "Title",
      text = "Text",
      n = 5;
  
  return (
  <div className="hex" style={{
    position: "relative",
    outline: "1px solid transparent",
    width: `calc(100% / 2)`
  }}>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    <pre>{JSON.stringify(entry, null, 2)}</pre>
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
      <div className="hexLink">
        <img src={src} alt />
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
