import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { useMutation } from '@tanstack/react-query';
import Iconify from '../../../components/iconify';
// query
import { authLogin } from '../../../query/auth/auth.query';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [errEmail, setErrEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const authentication = useMutation(authLogin, {
    onSuccess: (data) => {
      console.log('success');
      localStorage.setItem('token', data?.data?.token);
      navigate('/');
    },
    onError: (data) => {
      console.log(data);
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    // Clear previous error messages
    setErrEmail('');
    setErrPassword('');

    // Validate email and password
    if (!username) {
      setErrEmail('Please enter your email');
      return;
    }

    if (!password) {
      setErrPassword('Please enter your password');
      return;
    }

    try {
      // Call the login mutation with email and password
      await authentication.mutateAsync({ username, password });
    } catch (error) {
      // Handle login error
      if (error.response && error.response.data) {
        const { message } = error.response.data;

        if (message.includes('email')) {
          setErrEmail(message);
        }

        if (message.includes('password')) {
          setErrPassword(message);
        }
      }
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          error={Boolean(errEmail)}
          helperText={errEmail}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errPassword)}
          helperText={errPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton sx={{ mt: 2 }} fullWidth size="large" type="submit" variant="contained" onClick={handleClick} >
        Login
      </LoadingButton>
    </>
  );
}
