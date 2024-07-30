import React, { useState } from 'react';
import { Button, TextField, Alert, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

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
        navigate('/home');
      } else {
        setAlerta({ codigo: data.status_code });
      }
    } catch (error) {
      console.error('Login failed:', error);
      setAlerta({ codigo: 500 });
    }
  };

  const irRegistro = () => {
    navigate('/register');
  };

  const renderAlerta = () => {
    if (!alerta) return null;

    let mensaje;
    switch (alerta.codigo) {
      case 404:
        mensaje = "Usuario no Encontrado";
        break;
      case 401:
        mensaje = "Contraseña Incorrecta";
        break;
      case 500:
        mensaje = "Error en el servidor, intente nuevamente";
        break;
      default:
        mensaje = "Ocurrió un error desconocido";
    }

    return (
      <Alert severity="error" style={{ marginTop: 20 }}>
        {mensaje}
      </Alert>
    );
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
          id="user"
          label="user"
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

        {renderAlerta()}
      </div>
    </div>
  );
}

export default Login;
