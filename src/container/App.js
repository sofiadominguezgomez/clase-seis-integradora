import ClassComponent from '../component/ClassComponent';
import FunctionComponent from '../component/FunctionComponent';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="invitados">
        <h3>Invitados:</h3>
          <ClassComponent nombre="Nicolas" estaEnLista={true} />
          <ClassComponent nombre="Ivan" estaEnLista={false} />
          <ClassComponent nombre="Carolina" estaEnLista={true} />
      </div>
      <div className="tareas">
        <h3>Tareas:</h3>
          <FunctionComponent nombre="Nicolas" tarea="papas fritas" />
          <FunctionComponent nombre="Ivan" tarea="pizzas" />
          <FunctionComponent nombre="Carolina" tarea="bebidas" />
      </div>
    </div>
      
  );
}

export default App;
