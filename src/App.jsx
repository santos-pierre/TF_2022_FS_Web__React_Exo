import './App.css'
import products from './data/product.json';

import Bienvenue from './components/bienvenue/bienvenue';
import ProductList from './components/product-list/product-list';
import Calculatrice from './components/calculatrice/calculatrice';
import TodoList from './containers/todo-list/todo-list';
import ExoLifeCycle from './containers/exo-life-cycle/exo-life-cycle';

function App() {
  return (
    <div className="App">
      {/* <h1>Exo 01</h1>
      <Bienvenue nom='Zaza' /> */}

      {/*<h1>Exo 02</h1>
      <ProductList products={products} /> */}

      {/* <h1>Exo 03</h1>
      <Calculatrice /> */}

			{/* <h1>Exo 04</h1>
			<TodoList /> */}

			<h1>Exo 05</h1>
			<ExoLifeCycle />
    </div>
  )
}

export default App
