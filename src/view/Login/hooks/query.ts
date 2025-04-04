import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../axiosInstance';
import { LoginType } from '../types';
import { toast } from 'react-toastify';

const loginUser = async (data: LoginType) => {
  const response = await axiosInstance.post('/auth', data);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ['auth'],
    onSuccess: (data: string, variables: LoginType) => {
        console.log('Login successful:', data);
        toast.success('Login successful! Redirecting...');
        localStorage.setItem('token', data);
        localStorage.setItem('emailLogged', variables.email);
      },
      onError: (error) => {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      },
  });
};
