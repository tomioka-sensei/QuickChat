import { Box,Container, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/auth/login'
import Signup from '../components/auth/signup'
const Home = () => {

   return(
    <Container maxW='xl' centerContent >
        <Box
        display="flex"
        justifyContent="Center"
        p={3}
        bg={'white'}
        m= "40px 0 15px 0"
        width= "100%"
        borderRadius= "lg"
        borderWidth= "1px"


        >
            <Text fontSize="4xl" color="black">QuickChat</Text>

        </Box>

        <Box bg= "white" width="100%" p={4} borderRadius="lg" borderWidth="1px" >

        <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList alignContent="center" justifyContent="center" mb= "1rem"  >
    <Tab my= "1rem" textColor= "black" width="50%">Login</Tab>
    <Tab my= "1rem" textColor= "black" width="50%">SignUp</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>


        </Box>
        

    </Container>
   )
}

export default Home