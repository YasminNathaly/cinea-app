import React, { useState, useEffect } from 'react';
import movies from './movies';
import Filme from './Filme';
import { FaHome, FaFilm, FaTv, FaTags, FaUser, FaSearch, FaBell, FaPlay, FaInfoCircle, FaPlus } from 'react-icons/fa';
import './style.css';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [filmeDestaque, setFilmeDestaque] = useState(null);

  useEffect(() => {
    // Usar lista local de filmes (mock com 15 filmes famosos)
    setFilmes(movies);
    if (movies.length > 0) setFilmeDestaque(movies[0]);
  }, []);

  return (
    <div className="app-container">
      <div className="overlay"></div>

      <div className="cinea-layout">
        <aside className="sidebar">
          <div className="sidebar-icon active"><FaHome /><span>Início</span></div>
          <div className="sidebar-icon"><FaFilm /><span>Filmes</span></div>
          <div className="sidebar-icon"><FaTv /><span>Séries</span></div>
          <div className="sidebar-icon"><FaTags /><span>Gêneros</span></div>
          <div className="sidebar-icon"><FaUser /><span>Perfil</span></div>
        </aside>

        <main className="main-content">
          <header className="navbar">
            <div className="logo">CINEA</div>
            <ul className="nav-links">
              <li className="active">EXPLORAR</li>
              <li>CINEMA</li>
              <li>MEU UNIVERSO</li>
              <li>PERFIL</li>
            </ul>
            <div className="nav-actions">
              <FaSearch className="nav-icon" />
              <FaBell className="nav-icon" />
            </div>
          </header>

          {filmeDestaque && (
            <section 
              className="hero-banner"
              style={{
                  backgroundImage: `linear-gradient(to right, rgba(5,8,17,0.95) 30%, rgba(5,8,17,0.3)), url(${filmeDestaque.backdrop})`
                }}
            >
              <div className="hero-content">
                <span className="hero-tag">DESTINAÇÕES EM ALTA</span>
                <h1 className="hero-title">{filmeDestaque.title || filmeDestaque.name}</h1>
                <p className="hero-info">
                    Avaliação: ⭐ {filmeDestaque.vote_average?.toFixed(1)} | Lançamento: {filmeDestaque.release_date?.substring(0, 4)}
                </p>
                <p className="hero-overview">
                  {filmeDestaque.overview ? filmeDestaque.overview.substring(0, 150) + '...' : 'Sem sinopse disponível.'}
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary"><FaPlay /> Assistir Agora</button>
                  <button className="btn-secondary"><FaInfoCircle /> Saiba Mais</button>
                  <button className="btn-icon"><FaPlus /></button>
                </div>
              </div>
              <div className="hero-carousel">
                {filmes.slice(0, 8).map((p) => (
                  <div
                    key={p.id}
                    className={`poster-mini ${filmeDestaque?.id === p.id ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${p.poster})` }}
                    onMouseEnter={() => setFilmeDestaque(p)}
                    onClick={() => setFilmeDestaque(p)}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="catalog-section">
            <h2 className="section-title">RECOMENDADO PARA VOCÊ</h2>
            <div className="movies-row">
              {filmes.map((item) => (
                <div 
                  key={item.id} 
                  onMouseEnter={() => setFilmeDestaque(item)}
                  onClick={() => setFilmeDestaque(item)}
                  className={`card-wrapper ${filmeDestaque?.id === item.id ? 'card-active' : ''}`}
                >
                  <Filme
                    nome={item.title || item.name}
                    poster={item.poster}
                    avaliacao={item.vote_average}
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;