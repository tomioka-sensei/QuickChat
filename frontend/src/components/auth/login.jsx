import React, { useState } from 'react'
import {  VStack , StackDivider , Box ,InputGroup } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    InputRightElement,
    Button,
  } from '@chakra-ui/react'

  import { FaGoogle } from "react-icons/fa";


const Login = () => {

  const[email , setEmail] = useState()

  const [pass, setPass] = useState()

  const [show , setShow] = useState(false)

  const clickHandler = ()=>{
    setShow(show=>!show)
   }


  return (
    <VStack
    divider={<StackDivider borderColor='gray.200' />}
    spacing={1}
    align='stretch'
  >

<FormControl isRequired>
  <FormLabel>Email address</FormLabel>
  <Input type='email' 
  onChange={(e)=>setEmail(e.target.value)}
  />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>



<FormControl isRequired>
  <FormLabel>Password</FormLabel>
  <InputGroup>  
  <Input 
   pr='4.5rem'
  type={show? "text" : "password"} 
  onChange={(e)=>setPass(e.target.value)}
  />


<InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={clickHandler}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>

      </InputGroup>

  
</FormControl>

<Button colorScheme='blue' variant='solid'>
    Lets Chat
  </Button>

  <Button colorScheme='red' variant='solid' gap={1}>
     Go as guest
  </Button>



</VStack>

  )
}

export default Login