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
  import { useToast } from '@chakra-ui/react'
  import {axios} from "axios"
import {useHistory} from "react-router-dom"

  import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const[email , setEmail] = useState()
  const[loading , setLoading ] = useState(false)
  const [pass, setPass] = useState()

  const [show , setShow] = useState(false)

  const toast = useToast()
  const history = useHistory();

  const clickHandler = ()=>{
    setShow(show=>!show)
   }

   const submitHandler = async() =>{
       if(!email || !pass){
        toast({
          title: 'Invalid Req.',
          description: "all fields are required",
          status: 'warning',
          duration: 9000,
          isClosable: true,
        });

        setLoading(false);

        return;
       };

       try {

        const config = {
          'Content-Type': 'application/json'
        }

        const {data} = await axios.post(
          "/api/user/login",
          {email,pass},
          config
        );

        toast({
          title: 'atempt successful',
          description: "login successful",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });

        localStorage.setItem("userInfo",JSON.stringify(data));
        setLoading(false);
        history.push("/chats");
       }
        catch (error) {

        toast({
          title: 'Invalid Req.',
          description: error.response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
       }

   };




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
    Lets chat 
  </Button>

  <Button colorScheme='red' variant='solid' gap={1}>
     Go as guest
  </Button>



</VStack>

  )
}

export default Login