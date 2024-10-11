import { useState } from "react"

export default function Product() {

      const [setProdutos] = useState([])

      const produtos = [
            {id: 1,nome: 'produto1', preco: 2, img: 'https://via.placeholder.com/400'},
            {id: 2,nome: 'produto2', preco: 12, img: 'https://via.placeholder.com/400'},
            {id: 3,nome: 'produto3', preco: 2, img: 'https://via.placeholder.com/400'},
            {id: 4,nome: 'produto4', preco: 2, img: 'https://via.placeholder.com/400'},
      ]

      const adicionar = (produto) => {
            const carrinhoAtual = JSON.parse(localStorage.getItem('produtos') || '[]');

            const novoCarrinho = [...carrinhoAtual, produto];

            localStorage.setItem('produtos', JSON.stringify(novoCarrinho))

            setProdutos(novoCarrinho)

            alert(`${produto.nome} foi adicionado ao carrinho`)

      
      }


      return(
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                        {produtos.map((product) => (
                              <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                              <img src={product.img} className="w-full" alt={product.nome} />

                              <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{product.nome}</div>
                                    <p className="text-gray-700 text-base">R${product.preco}.00</p>
                              </div>

                              <div className="px-6 pt-4 pb-2">
                                    <button 
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                    type="submit"
                                    onClick={() => adicionar(product)}>
                                          Comprar
                                    </button>
                              </div>
                        </div>
                        ))}
                  </div>

            </div>
      )
}