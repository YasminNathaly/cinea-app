import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

function Filme({ nome, poster, avaliacao }) {
  let imageUrl = 'https://via.placeholder.com/500x750?text=Sem+Imagem';
  if (poster) {
    if (poster.startsWith('http')) imageUrl = poster;
    else imageUrl = `https://image.tmdb.org/t/p/w500${poster}`;
  }

  return (
    <div style={{ width: 170 }}>
      <div
        style={{
          width: 170,
          height: 240,
          borderRadius: 12,
          overflow: 'hidden',
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.45)), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid rgba(0,240,255,0.06)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
          transition: 'transform 0.25s, box-shadow 0.25s',
        }}
      />

      <div style={{
        marginTop: 8,
        color: '#e6eef8',
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {nome}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, color: '#ffd700' }}>
        <FaStar />
        <span style={{ fontWeight: 800, color: '#ffd700' }}>{avaliacao ? avaliacao.toFixed(1) : 'N/A'}</span>
      </div>
    </div>
  );
}

Filme.propTypes = {
  nome: PropTypes.string.isRequired,
  poster: PropTypes.string,
  avaliacao: PropTypes.number,
};

export default Filme;