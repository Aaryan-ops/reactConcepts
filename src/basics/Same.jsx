import r from 'react'
const x=(<h1 className="user">Windows x64</h1>);
const y=r.createElement("h1",{className:"user"},"host : some other comp");

const Same=()=><div>{x}{y}</div>;
export default Same