'use client';

import { Box, useToast } from '@chakra-ui/react';
import { ReactNode, createContext, useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { GetAllRocketsApi } from '../Api';
import '../styles/globals.css'
import { RocketContextProps } from '../utilities/schema';

type LayoutProps = {
  children: ReactNode;
};

export const RocketsContext = createContext<RocketContextProps | null>(null);

const Layout = ({ children }: LayoutProps) => {

  const [rockets, setRockets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useToast();

  const getAllRockets = async() => {
    setLoading(true)
    try {
      const response = await GetAllRocketsApi();
      const data = await response.data;
      setRockets(data);
      setLoading(false);
    } catch (error: any) {
      toast({
        title: 'Error!',
        description: error.message,
        duration: 3000,
        position: 'top',
        isClosable: true,
        status: 'error'
      });
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllRockets();
  }, [])


  return (
    <Box transition="0.5s ease-out">
      <Box>
        <RocketsContext.Provider value={{rockets, loading, setRockets}}>
        {/* <Header /> */}
        <Box as="main">
          {children}
        </Box>
        {/* <Footer /> */}
        </RocketsContext.Provider>
      </Box>
    </Box>
  );
};

export default Layout;
