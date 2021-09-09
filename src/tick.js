
const x= (<h2>cccc {new Date().toLocaleDateString()} ccc</h2>);
const y=(<h6>heading 6 {new Date().toLocaleTimeString()} </h6>);

const fd=()=>{const h=(<div><h2>hell oooo</h2><h3>it is {new Date().toLocaleTimeString()}</h3><p>this is x : {x} and this is y {y}</p></div>);br.render(h,document.getElementById('tick')); }

export default fd;