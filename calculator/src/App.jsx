import React from "react";
import {add,division,sub,product } from "./Calc"
function App(){
    return(
        <>
   <ul>
     <li>sum of two np is {add(40,20)}</li>
     <li>subtract of two np is {sub(40,20)}</li>
     <li>product of two np is {product(40,20)}</li>
     <li>division of two np is {division(40,20)}</li>
   </ul>
 </>
    );
}

export default App;

