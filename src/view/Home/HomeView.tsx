import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Container, CardContent } from '@mui/material';
import { useUser } from './hooks/query';


const HomeView: React.FC = () => {
    const [role, setRole] = useState<string>('');
    const emailLogged = localStorage.getItem('emailLogged');
    const { data } = useUser(emailLogged);

    useEffect(() => {
      if (data) {
        setRole(data.role);
      }
    }, [data]);

    return (
      <Container maxWidth="lg">
        <Box my={4}>
            <Typography variant="h4" gutterBottom>
                {role === 'student' ? 'Choose a teacher to request a lesson' : 'Welcome to your teacher dashboard'}
            </Typography>
            {role === 'student' && (
              <CardContent>
                <Typography variant="h5">Teacher 1</Typography>
                  <Button variant="contained" color="primary">
                    Request Lesson
                  </Button>
              </CardContent>
            )}
            {role === 'teacher' && (
              <CardContent>
                <Typography variant="h5">Teacher 1</Typography>
                  <Button variant="contained" color="primary">
                    Request Lesson
                  </Button>
              </CardContent>
            )}
        </Box>
      </Container>
    );
};

export default HomeView;
