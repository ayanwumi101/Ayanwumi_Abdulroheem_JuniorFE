import { Box, Skeleton,SkeletonText, SkeletonCircle, Flex } from '@chakra-ui/react'

export const SkeletonLoader = () => {
    return (
        <Box bg='#ededed' borderRadius='12px' p='4' boxShadow='md'>
            <Flex alignItems='center' justifyContent='space-between'>
                <SkeletonCircle size='10' />
                <SkeletonText skeletonHeight='10px' noOfLines={2} w='30%' borderRadius='8px' />
                <SkeletonText skeletonHeight='10px' noOfLines={2} w='30%' borderRadius='8px' />
                <SkeletonText skeletonHeight='45px' noOfLines={1} w='80px' borderRadius='12px' />
            </Flex>
        </Box>
    )
}