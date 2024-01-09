import React from 'react';


interface CursoCardProps {
  titulo: string;
  imagemUrl: string;
  // Adicione outras propriedades conforme necessário
}

const CursoCard: React.FC<CursoCardProps> = ({ titulo, imagemUrl }) => {
  return (
    <div className="curso-card">
      <img src={imagemUrl} alt={titulo} className="curso-image" />
      <div className="curso-info">
        <h2>{titulo}</h2>
        {/* Adicione outros detalhes do curso aqui */}
      </div>
    </div>
  );
};

export default CursoCard;