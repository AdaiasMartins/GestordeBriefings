import React, { useEffect, useState } from 'react';

type Briefin = {
  id: string;
  nome: string;
  descricao: string;
  estado: string;
};

const App: React.FC = () => {
  const [briefins, setBriefins] = useState<Briefin[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/briefins')
      .then((response) => response.json())
      .then((data) => setBriefins(data))
      .catch((error) => console.error("Erro ao buscar briefins:", error));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <header className="w-full text-center py-8 bg-blue-500 text-white text-3xl font-bold">
        Gestor de Briefins
      </header>
      <main className="flex flex-wrap justify-center gap-4 mt-8 p-4">
        {briefins.map((briefin) => (
          <div key={briefin.id} className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{briefin.nome}</h5>
            <p className="font-normal text-gray-700">{briefin.descricao}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {briefin.estado}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
