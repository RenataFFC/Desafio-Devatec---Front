import React from 'react';
import imgModulo from '../../assets/imagens/imgSql.jpg';


interface CursoCardProps {
  titulo: string;
  imagemUrl: string;
  // Adicione outras propriedades conforme necessário
}

const CursoCard: React.FC<CursoCardProps> = ({ titulo }) => {
  return (
    <div className="curso-card">
      <img src={imgModulo} alt={titulo} className="imgModulo" />
      <div className="curso-info">
        <h2>{titulo}</h2>
        {/* Adicione outros detalhes do curso aqui */}
      </div>
    </div>
  );
};

export default CursoCard;
