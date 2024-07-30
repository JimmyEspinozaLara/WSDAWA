import React, { useState } from 'react';
import { Button, TextField, Alert, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';  // Asegúrate de que la ruta sea correcta

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[token, setToken] = useState('');
  const [alerta, setAlerta] = useState(null);
  const navigate = useNavigate();

  const manejadorLogin = async () => {
    try {
      const response = await fetch("http://localhost:1008/security/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          login_user: email,
          login_password: password
        })
        
      });
      const data = await response.json();
      
      console.log(data);

      if (data.status_code === 200) {
        setToken(data.data)
        navigate('/home'); // Redirige a la página de inicio si el login es exitoso
      } else {
        setAlerta({ codigo: data.status_code });
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const irRegistro = () => {
    navigate('/register'); // Redirige a la página de registro
  };

  return (
    <div className="Login_Contenedor">
      <div className="Login_Formulario">
        <Typography variant="h3" className="login-title">
          Red Social UG
        </Typography>
        <Typography variant="h6">Iniciar Sesión</Typography>
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <div className="Login_Boton">
          <Button variant="contained" color="primary" onClick={manejadorLogin} fullWidth>
            Entrar
          </Button>
          <Button variant="outlined" color="secondary" onClick={irRegistro} fullWidth style={{ marginTop: '10px' }}>
            Registrarse
          </Button>
        </div>

        <div className="Alerta">
          {alerta && alerta.codigo === 404 ? (
            <Alert severity="error" style={{ marginTop: 20 }}>
              Usuario no Encontrado
            </Alert>
          ) : null}
        </div>

        <div className="Alerta">
          {alerta && alerta.codigo === 401 ? (
            <Alert severity="error" style={{ marginTop: 20 }}>
              Contraseña Incorrecta
            </Alert>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Login;
