import React, { useState, useEffect } from 'react';

type Briefin = {
  id: string;
  nome: string;
  descricao: string;
  estado: string;
};

enum EstadoDoBriefin {
  negociando = 'negociando',
  finalizado = 'finalizado',
  aprovado = 'aprovado',
}

const App: React.FC = () => {
  const [view, setView] = useState<'list' | 'create'>('list');
  const [briefins, setBriefins] = useState<Briefin[]>([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentBriefinId, setCurrentBriefinId] = useState<string>('');
  const [estado, setEstado] = useState<EstadoDoBriefin | ''>('');


  useEffect(() => {
    if (view === 'list') {
      fetch('http://localhost:3000/briefins')
        .then((response) => response.json())
        .then(setBriefins)
        .catch(console.error);
    }
  }, [view]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { nome, descricao, estado };
    const url = isEditing ? `http://localhost:3000/briefin/${currentBriefinId}` : 'http://localhost:3000/briefin';

    fetch(url, {
      method: isEditing ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setView('list');
        setNome('');
        setDescricao('');
        setEstado('' as EstadoDoBriefin);
        setIsEditing(false);
      })
      .catch(console.error);
  };

  const handleEdit = (briefin: Briefin) => {
    setIsEditing(true);
    setCurrentBriefinId(briefin.id);
    setNome(briefin.nome);
    setDescricao(briefin.descricao);
    setEstado(briefin.estado as EstadoDoBriefin);
    setView('create');
  };

  const handleDelete = (id: string) => {
    fetch(`http://localhost:3000/briefin/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBriefins(briefins.filter((briefin) => briefin.id !== id));
      })
      .catch(console.error);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <header className="w-full text-center py-8 bg-blue-500 text-white text-3xl font-bold">
        Gestor de Briefins
      </header>
      <div className="my-4">
        <button
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            setIsEditing(false);
            setView('list');
          }}
        >
          Ver Briefins
        </button>
        <button
          className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => {
            setIsEditing(false);
            setView('create');
            setCurrentBriefinId('');
            setNome('');
            setDescricao('');
            setEstado('');
          }}
        >
          Criar Briefin
        </button>
      </div>
      {view === 'create' || isEditing ? (
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="descricao" className="block text-gray-700 text-sm font-bold mb-2">
                Descrição
              </label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="estado" className="block text-gray-700 text-sm font-bold mb-2">
                Estado
              </label>
              <select
                id="estado"
                value={estado || ''}
                onChange={(e) => setEstado(e.target.value as EstadoDoBriefin)}
                required
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione um estado</option>
                <option value={EstadoDoBriefin.negociando}>Negociando</option>
                <option value={EstadoDoBriefin.finalizado}>Finalizado</option>
                <option value={EstadoDoBriefin.aprovado}>Aprovado</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? 'Salvar Alterações' : 'Criar Briefin'}
            </button>
            {isEditing && (
              <button
                onClick={() => setIsEditing(false)}
                className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancelar
              </button>
            )}
          </form>
        </div>
      ) : (
        <main className="w-full px-4 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {briefins.map((briefin) => (
              <div
                key={briefin.id}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col items-start max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{briefin.nome}</h5>
                <p className="text-gray-700">{briefin.descricao}</p>
                <span className="mt-4 inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {briefin.estado}
                </span>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(briefin)}
                    className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(briefin.id)}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
