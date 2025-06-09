import { useState } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import type { loginCredentialsType } from '../utils/utilsType.ts';
import { post } from '../utils/apiHelper.ts';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here

    const loginCredentials: loginCredentialsType = {
      "username": username,
      "password": password
    }
    
    console.log("username:", username);
    console.log("password:", password);

    post("http://localhost:8089", loginCredentials);


    // navigate('/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 340, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h5" fontWeight={700} align="center" mb={1}>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }} fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Login; 
