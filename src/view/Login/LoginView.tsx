import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Typography, Box, Container, Paper, CircularProgress } from '@mui/material';
import schema from './schema';
import { LoginType } from './types';
import { useLogin } from './hooks/query';

const LoginView: React.FC = () => {
  const { mutate, isPending } = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginType) => {
    mutate(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Box textAlign="center" marginTop={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isPending ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginView;
