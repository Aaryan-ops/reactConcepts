import r from 'react'
import Exp from './Exp';
const y='universe';
const x=<em>Hello {y}</em>
const a={x:"to influence a person is to give one's own soul",y:"\t Travel improves the mind wonderfully and does away with all one's prejudices."};
const fx=()=>a.x+a.y;
const Hello =()=><>{x}<hr/><p>{fx()}</p><br /><Exp /></>;

export default Hello