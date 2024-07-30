// src/components/Home.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [busqueda, setBusqueda] = useState('');
  const [comentario, setComentario] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, autor: 'Usuario 1', contenido: 'Este es un post educativo', titulo: 'Título del post 1', autorAvatar: 'https://via.placeholder.com/40' },
    { id: 2, autor: 'Usuario 2', contenido: 'Otro post sobre educación', titulo: 'Título del post 2', autorAvatar: 'https://via.placeholder.com/40' }
  ]);
  const [likes, setLikes] = useState({});
  const [nuevoPost, setNuevoPost] = useState({ titulo: '', contenido: '' });

  const navigate = useNavigate();

  const handleBusqueda = (e) => setBusqueda(e.target.value);
  const handleComentario = (e) => setComentario(e.target.value);
  const handleNuevoPost = (e) => setNuevoPost({ ...nuevoPost, [e.target.name]: e.target.value });

  const handleLike = (id) => {
    setLikes((prevLikes) => ({ ...prevLikes, [id]: !prevLikes[id] }));
  };

  const handleComentar = (id) => {
    console.log(`Comentario: ${comentario} en post ${id}`);
  };

  const handlePublicarPost = () => {
    if (nuevoPost.titulo && nuevoPost.contenido) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          autor: 'Usuario Actual',
          contenido: nuevoPost.contenido,
          titulo: nuevoPost.titulo,
          autorAvatar: 'https://via.placeholder.com/40'
        }
      ]);
      setNuevoPost({ titulo: '', contenido: '' });
    }
  };

  const handleCerrarSesion = () => {
    console.log('Cerrar sesión');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <a href="/profile" className="profile-link">Mi Perfil</a>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleCerrarSesion}
        className="logout-button"
      >
        Cerrar Sesión
      </Button>
      
      <div className="welcome-section">
        <Typography variant="h2" className="welcome-title">
          Red Social UG
        </Typography>
      </div>
      
      <div className="search-section">
        <Typography variant="h6" gutterBottom>
          Buscador
        </Typography>
        <TextField
          id="busqueda"
          label="Buscar"
          value={busqueda}
          onChange={handleBusqueda}
          fullWidth
          className="search-field"
        />
        <Button
          variant="contained"
          color="primary"
        >
          Buscar
        </Button>
      </div>

      <div className="post-creation-section">
        <Typography variant="h6" gutterBottom>
          Crear un nuevo post
        </Typography>
        <TextField
          id="titulo"
          name="titulo"
          label="Título"
          value={nuevoPost.titulo}
          onChange={handleNuevoPost}
          fullWidth
          className="post-title-field"
        />
        <TextField
          id="contenido"
          name="contenido"
          label="Contenido"
          value={nuevoPost.contenido}
          onChange={handleNuevoPost}
          fullWidth
          multiline
          rows={4}
          className="post-content-field"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePublicarPost}
          className="publish-button"
        >
          Publicar
        </Button>
      </div>

      <div className="post-section">
        <Typography variant="h6" gutterBottom>
          Posts de otros usuarios
        </Typography>
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <Avatar src={post.autorAvatar} alt={post.autor} />
            <div className="post-content">
              <Typography variant="h6" gutterBottom>
                {post.titulo}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {post.contenido}
              </Typography>
              <div className="post-author">
                <img src={post.autorAvatar} alt={post.autor} />
                {post.autor}
              </div>
            </div>
            <div className="post-actions">
              <ThumbUpIcon
                className="like-button"
                color={likes[post.id] ? 'primary' : 'action'}
                onClick={() => handleLike(post.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;



