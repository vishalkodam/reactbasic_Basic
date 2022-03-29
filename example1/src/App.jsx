import React from 'react';


function App(){
    let curDate = new Date();
curDate = curDate.getHours();
let x = "";
const cssStyle = {};
if(curDate >= 1 && curDate < 12){
  x = "Good Morning";
  cssStyle.color = 'green'
}else if (curDate >= 12 && curDate < 19){
  x = "Good Afternoon";
  cssStyle.color = 'orange';
}else {
  x = "Good Night";
  cssStyle.color = 'red';
}

return (
    <>
    <div>
    <h1> Hello! <span style = {cssStyle}>{x} </span> 
    </h1>
  </div>
</>
);
}

export default App;n