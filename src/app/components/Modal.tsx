import React from 'react';

// Interface que define las props del Modal
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  director: string;
  rating: number;
  synopsis: string;
}

const Modal = ({ isOpen, onClose, title, director, rating, synopsis }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose} // Cierra al hacer clic afuera
    >
      <div 
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic adentro
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          X
        </button>
        <h2 style={{ marginTop: 0, color: '#003f7f' }}>{title}</h2>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Calificación:</strong> ⭐ {rating}/10</p>
        <p style={{ lineHeight: '1.5', color: '#333' }}><strong>Sinopsis:</strong><br/>{synopsis}</p>
      </div>
    </div>
  );
};

export default Modal;
