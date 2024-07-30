import React from 'react';
import { Avatar, Typography, Paper, Grid } from '@mui/material';
import '../styles/Profile.css'; 

const Profile = () => {
  const user = {
    nombre: 'Juan Pérez',
    foto: 'https://via.placeholder.com/100', // URL foto de perfil
    fechaNacimiento: '17/05/1998',
    facultad: 'Ciencias Matemáticas y Físicas',
    carrera: 'Ingeniería en Software',
    semestre: '4to Semestre',
  };

  return (
    <div className="profile-container">
      <Paper className="profile-card">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} className="profile-photo">
            <Avatar alt={user.nombre} src={user.foto} sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom>
              {user.nombre}
            </Typography>
            <Typography variant="body1">
              <strong>Fecha de Nacimiento:</strong> {user.fechaNacimiento}
            </Typography>
            <Typography variant="body1">
              <strong>Facultad:</strong> {user.facultad}
            </Typography>
            <Typography variant="body1">
              <strong>Carrera:</strong> {user.carrera}
            </Typography>
            <Typography variant="body1">
              <strong>Semestre:</strong> {user.semestre}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Profile;
