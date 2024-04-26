import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { CapsuleDetailsProps } from '~/lib/utilities/schema'


const CapsuleDetails = ({
    id,
    type,
    status,
    serial,
    last_update,
    land_landings,
    reuse_count,
    launches,
    water_landings
}: CapsuleDetailsProps) => {
  return (
    <Box>
        <Stack spacing='20px'>
            <Box>
                <Heading fontSize={24} textAlign='center' >Capsule Details</Heading>
            </Box>
            <Box>
                <Stack spacing='10px'>
                    <Box>
                        <Text fontWeight={600}>Capsule ID: <Box as='span' fontWeight={400}>{id}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Type: <Box as='span' fontWeight={400}>{type}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Status: <Box as='span' fontWeight={400}>{status}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Serial No: <Box as='span' fontWeight={400}>{serial}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Land Landings: <Box as='span' fontWeight={400}>{land_landings}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Reuse Count: <Box as='span' fontWeight={400}>{reuse_count}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Launches: 
                            <Box as='span' fontWeight={400}>{launches?.map((launch: string) => <Text>{launch}</Text>)}</Box>
                        </Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Water Landings: <Box as='span' fontWeight={400}>{water_landings}</Box></Text>
                    </Box>
                    <Box>
                        <Text fontWeight={600}>Capsule Last Uodate: <Box as='span' fontWeight={400}>{last_update}</Box></Text>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default CapsuleDetails