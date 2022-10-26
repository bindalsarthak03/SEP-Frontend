import { Flex } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'

const Landing = () => {
    return (
        <Flex direction={'column'} justifyContent={'center'} mt={10}>
            <Hero/>
        </Flex>
    )
}

export default Landing