import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Aun no tenemos Productos disponibles!!!"} />
    </div>
    
  );
}

export default App;
