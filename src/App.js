//import Home from './components/Home/Home'
//import Characters from './components/Characters/Characters';
import Contact from './Components/Contact/Contact'
import './App.css';

function App() {

  return (
    <div>
      {/* <Home/>*/}
      {/* <Characters />*/}
      <Contact/>
    </div>
  );
}

export default App;



// function App() {
//   //let nombre="Ana" //estado
//   // nombre valor inicial :"Ana"; setNombre() // useState es un metodo que segmenta que te permite poner el valor inicial

//   let [nombre, setNombre]= useState("Ana");
//   // al hacer click en el boton cabia el nombre a Ana o a Jose

//   let dato=["item1", "item2", "item3"]

//   const cambiarNombre=()=>{
//    console.log("se clickeo el boton")
//    // uso el setter para cambiar el valor actula del estado Nombre
//    if (nombre === "Ana")
//       setNombre("Jose")
//       else setNombre("Romi")
//   }
  
//   return (
//     <div  className="App">
//       <Home/>
//        <h1>Hola soy un títuloooooooooooo</h1> 
//       <Titular nombrePersona={nombre}></Titular>
//       <button className="btn btn-succes" onClick={cambiarNombre}>{nombre}</button>
    

//       <Lista infoitems={dato}/>

//     </div>
//   );
//}

