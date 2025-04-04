import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../../axiosInstance';
import { UserType } from '../type';

const getUser = async (email: string) => {
  const response = await axiosInstance.get<UserType>(`/users/${email}`);
  return response.data;
};

export const useUser = (email: string | null) => {
  return useQuery({
    queryKey: ['user', email],
    queryFn: () => email ? getUser(email) : Promise.reject('Email is undefined'),
    enabled: !!email
    });
};
