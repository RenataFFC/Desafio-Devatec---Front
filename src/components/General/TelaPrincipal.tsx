
import CursoCard from './CursoCard';

const TelaPrincipal = () => {
  
 

  return (
    <div className="ContainerTelaPrincipal">
     <main className='ContainerCard'>
        {/* Aqui você pode buscar dados do banco e renderizar os cards */}
        <CursoCard titulo="Curso 1" imagemUrl="url_da_imagem_1.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        <CursoCard titulo="Curso 2" imagemUrl="url_da_imagem_2.jpg" />
        {/* Adicione mais cards conforme necessário */}
      </main>
    </div>
  );
};

export default TelaPrincipal;
