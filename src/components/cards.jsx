import { useState } from "react";

export default function Product() {
  const [produtos] = useState([
    { id: 1, nome: 'produto1', preco: 2, img: 'https://via.placeholder.com/400' },
    { id: 2, nome: 'produto2', preco: 12, img: 'https://via.placeholder.com/400' },
    { id: 3, nome: 'produto3', preco: 2, img: 'https://via.placeholder.com/400' },
    { id: 4, nome: 'produto4', preco: 2, img: 'https://via.placeholder.com/400' },
  ]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrinho, setCarrinho] = useState([]); 

  const adicionar = (produto) => {
    const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
    localStorage.setItem('produtos', JSON.stringify(novoCarrinho)); 
    alert(`${produto.nome} foi adicionado ao carrinho`);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedProduct(null); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {produtos.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img src={product.img} className="w-full" alt={product.nome} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.nome}</div>
              <p className="text-gray-700 text-base">R$ {product.preco}.00</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                type="submit"
                onClick={() => openModal(product)}> 
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>


      {isOpenModal && selectedProduct && ( 
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-50 max-w-lg w-full">
            <span onClick={closeModal} className="absolute top-2 right-2 text-2xl font-bold cursor-pointer">&times;</span>
            <div className="mt-4 p-4 text-center">
              <h1 className="font-sans">Quer adicionar {selectedProduct.nome} ao carrinho?</h1> 
              <div className="grid grid-cols-2 px-6 py-4">
                <button 
                  className="bg-green-500 ml-3 rounded-lg shadow-sm shadow-green-700"
                  onClick={() => {
                    adicionar(selectedProduct); 
                    closeModal(); 
                  }}>
                  SIM
                </button>
                <button className="bg-red-500 rounded-lg shadow-sm shadow-red-700" onClick={closeModal}>
                  NÃO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
