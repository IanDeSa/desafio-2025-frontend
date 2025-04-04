import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../axiosInstance';
import { toast } from 'react-toastify';
import { CreateUserResponseDto, RegistrationType } from '../types';

const RegistrationUser = async (data: RegistrationType) => {
  const response = await axiosInstance.post<CreateUserResponseDto>('/users', data);
  return response.data;
};

export const useRegistration = () => {
return useMutation({
    mutationFn: RegistrationUser,
    mutationKey: ['users'],
    onSuccess: () => {
        toast.success('Registration successful! Redirecting...');
    },
    onError: (error) => {
        console.error('Registration error:', error);
        toast.error('Registration failed. Please try again.');
    },
});
};
