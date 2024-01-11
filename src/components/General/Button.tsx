import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  buttonStyle: string; // ou o tipo específico que você deseja usar
  buttonSize: string; // ou o tipo específico que você deseja usar
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const STYLES = ['btn--primary', 'btn--outline'];
  const SIZES = ['btn--medium', 'btn--large'];

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

