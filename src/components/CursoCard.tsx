import React from 'react';
import imgCurso from '../assets/imagens/imgSql.jpg'


interface CursoCardProps {
  titulo: string;
  imagemUrl: string;
  // Adicione outras propriedades conforme necessário
}

const CursoCard: React.FC<CursoCardProps> = ({ titulo, imagemUrl }) => {
  return (
    <div className="curso-card">
      <img src={imgCurso} alt={titulo} className="imgCurso" />
      <div className="curso-info">
        <h2>{titulo}</h2>
        {/* Adicione outros detalhes do curso aqui */}
      </div>
    </div>
  );
};

export default CursoCard;