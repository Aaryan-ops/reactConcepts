import React,{useState} from 'react'

function Fetch() {
  const [fs,g]=useState("");
  fetch("./data.json").then(function(x){return x.json();}).then(function(ss){g(ss)});

  return (
    <div >
      {fs.toString()}
    </div>
  )
}

export default Fetch
