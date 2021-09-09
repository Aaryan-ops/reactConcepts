import Tabindex from "./Tabindex";
const user=null;
const u={};
const buser={a:'hie',b:' singh'};

const fx=(f)=>{if(f){return <h1> hello, {buser.a+buser.b}</h1>}return <h1> hello stranger</h1>};

const Exp=()=><ul><li>this is  a text/////{fx(user)}</li><li>{fx(buser)}</li><li>Empty object : {fx(u)}</li><li><Tabindex /></li></ul>;

export default Exp;