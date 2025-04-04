import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Typography, Box, Container, Paper, CircularProgress } from '@mui/material';
import schema from './schema';
import { useRegistration  } from './hooks/query';
import { RegistrationType } from './types';
import { Link, useNavigate } from 'react-router-dom';

const RegisterView: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegistration();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<RegistrationType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegistrationType) => {
    const response = await mutateAsync(data);

    if (response) {
      navigate('/login');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Registration
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

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

              <Box marginTop={2}>
              <Typography variant="subtitle1" gutterBottom>
                Role
              </Typography>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <label>
                <input
                  type="radio"
                  value="student"
                  {...register('role')}
                  onChange={(e) => setValue('role', e.target.value as "student" | "teacher")}
                />
                Student
                </label>
                <label>
                <input
                  type="radio"
                  value="teacher"
                  {...register('role')}
                  onChange={(e) => setValue('role', e.target.value as "student" | "teacher")}
                />
                Teacher
                </label>
              </Box>
              {errors.role && (
                <Typography variant="body2" color="error">
                {errors.role.message}
                </Typography>
              )}
              </Box>

          <Box textAlign="center" marginTop={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isPending ? <CircularProgress size={24} /> : 'Register'}
            </Button>
          </Box>
          <Box textAlign="center" marginTop={2}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/login">Sign In</Link>
            </Typography>
        </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterView;
