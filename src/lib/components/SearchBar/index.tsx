import { Box, Input, Flex, Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { RiSearch2Fill, RiSearch2Line } from 'react-icons/ri'
import { SearchBarProps } from '~/lib/utilities/schema'

const SearchBar = ({searchQuery, setSearchQuery}: SearchBarProps) => {

  return (
    <Box maxW='600px' mx='auto' border='2px solid #ededed' borderRadius='60px' py='2' px='3'>
        <Flex alignItems='center'>
            <RiSearch2Line fontSize={30} color='gray' />
            <input value={searchQuery} onChange={(e: any) => setSearchQuery(e.target.value)} type="text" style={{width: '500px', border: 'none', outline: 'none', padding: '10px', backgroundColor: 'none'}} placeholder='Search capsules by status, type and serial no' />
        </Flex>
    </Box>
  )
}

export default SearchBar