import Cards from "./components/cards.jsx"
import Carrinho from './components/carrinho.jsx'

export default function App() {

  return (
    <>
        <div className="text-2xl font-mono text-gray-600">
          PLANOS LA SOFT SOLUTIONS
        </div>
        <div>
          <Carrinho />
          
        </div>
        <Cards />
     
    </>
  )
}

