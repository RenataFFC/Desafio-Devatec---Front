// CursoCard.tsx
import React from 'react';

interface CursoCardProps {
  titulo: string;
  imagem_modulo: string; // Corrigido de imagemUrl para imagem_modulo
}

const CursoCard: React.FC<CursoCardProps> = ({ titulo, imagem_modulo }) => {
  console.log('Titulo:', titulo);
  console.log('Imagem URL:', imagem_modulo);

  if (!titulo || !imagem_modulo) {
    return <div className="curso-card">Dados inválidos!</div>;
  }

  return (
    <div className="curso-card">
      <img src={imagem_modulo} alt={`Imagem do curso ${titulo}`} className="imgModulo" />
      <div className="curso-info">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};

export default CursoCard;


