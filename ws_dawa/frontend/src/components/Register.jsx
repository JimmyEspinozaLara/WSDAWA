// src/components/Register.jsx
import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setAlert({ type: 'error', message: '¡Las contraseñas no coinciden!' });
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:3200/usuario/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.status_code === 200) {
        navigate('/login');
      } else {
        setAlert({ type: 'error', message: data.message });
      }
    } catch (error) {
      setAlert({ type: 'error', message: '¡Ocurrió un error!' });
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="Register_Contenedor">
      <div className="Register_Formulario">
        <h2>Registro</h2>
        <TextField
          required
          id="Correo"
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <br /><br />
        <TextField
          required
          id="Contraseña"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <br /><br />
        <TextField
          required
          id="ConfirmarContraseña"
          label="Confirmar Contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />
        <div className="Register_Boton">
          <Button variant="contained" color="success" onClick={handleRegister}>
            Registrarse
          </Button>
          <Button variant="outlined" color="primary" onClick={handleBack} style={{ marginLeft: '10px' }}>
            Volver al Login
          </Button>
        </div>
        <div className="Alerta">
          {alert && alert.type === 'error' ? (
            <Alert severity="error" style={{ marginTop: 20 }}>
              {alert.message}
            </Alert>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Register;
