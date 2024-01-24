// TelaPrincipal.tsx
import { useEffect, useState } from 'react';
import CursoCard from './CursoCard';
import { HttpApiServices } from '../../services/HttpApiServices';

const TelaPrincipal = () => {
  const [modulos, setModulos] = useState<any[]>([]);
  const api = new HttpApiServices()
  const fetchModulos = async () => {
    try {
       const response = await api.get('/modulos/listar');
      setModulos(response.data);
    } catch (error) {
      console.error('Erro ao buscar módulos:', error);
    }
  };
   
  useEffect(() => {
       fetchModulos();
  }, []); 

  return (
    <div className="ContainerTelaPrincipal">
      <main className='ContainerCard'>
        {modulos.map((modulo) => (
          <CursoCard key={modulo._id} titulo={modulo.titulo} imagemUrl={modulo.imagemUrl} />
        ))}
      </main>
    </div>
  );
};

export default TelaPrincipal;


