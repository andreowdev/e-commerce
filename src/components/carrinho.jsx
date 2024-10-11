import { useState } from "react";

export default function Carrinho() {
  const [isModalOpen, setModalOpen] = useState(false);

  const userData = localStorage.getItem('produtos');
  const produtos = userData ? JSON.parse(userData) : [];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const totalCompras = () => {
    return produtos.reduce((total, product) => total + product.preco, 0).toFixed(2);
  };

  return (
    <div className="flex items-end lg:justify-end xl:justify-end justify-center mr-3">
      <button 
        className="bg-green-500 p-2 rounded-lg shadow-lg shadow-zinc-200 text-white font-bold my-3"
        onClick={openModal}
      >
        CARRINHO
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Fundo do modal */}
          <div 
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>

          {/* Conteúdo do modal */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-50 max-w-lg w-full">
            <span 
              className="absolute top-2 right-2 text-2xl font-bold cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h1 className="text-2xl font-bold mb-4">CARRINHO DE COMPRAS</h1>
            <div className="flex justify-between text-lg font-bold mb-4">
              <h1>Total das compras: </h1>
              <p>{`R$ ${totalCompras()}`}</p>
            </div>
            {produtos.length === 0 ? (
              <div className="p-4 text-center text-gray-500">Nenhum produto no carrinho.</div>
            ) : (
              produtos.map((product) => (
                <div key={product.id} className="flex items-center p-3 my-2 border border-[#9fa5aa] rounded-lg text-center font-sans">
                  <img 
                    src={product.img} 
                    alt={product.nome} 
                    className="w-16 h-16 object-cover rounded mr-4"
                    onError={(e) => e.target.src = 'caminho/para/imagem/padrao.png'} 
                  />
                  <div className="flex-1 text-left"> 
                    <p className="font-semibold">{product.nome}</p>
                    <p className="font-bold text-lg">{`R$ ${product.preco.toFixed(2)}`}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
