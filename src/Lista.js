//import { useLayoutEffect } from "react";

export default function Lista ({infoitems}){

//const mostrar=()=>( console.log(infoitems))


return (
    <ul className="my-4">
        {infoitems.map((itemDelArray)=>{
       return <li key={itemDelArray} className="btn btn success"> {itemDelArray}</li>
        })}
    </ul>

)
/*
Cuando utilizo array para armar elementos o componentes le tengo que agregar a cada elemento o componente una prop llamada "key" que tiene como valor un dato unico (id) que le sirve a REact para identificarlos entre si

*/

/*
usa llaves dentro del return cuando quiero usar JS:mostrar una funcion, variables, etc
y en los parametros del componete cuantod de todas las porps solo quiero buscar una
*/
}