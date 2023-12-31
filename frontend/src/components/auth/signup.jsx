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


const Signup = () => {
   const[name ,setName] = useState(false)

   const[email , setEmail] = useState()

   const [show , setShow] = useState(false)

   const [pass, setPass] = useState()

   const [confirm, setCofirm] = useState()

   const [photo , setPhoto] = useState()

   const fileSelect = (pics)=>{}

   const clickHandler = ()=>{
    setShow(show=>!show)
   }

   const submitHandler = ()=>{
    
   }



  return (
    <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={1}
  align='stretch'
>
<FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input  placeholder='First name' 
   onChange = {(e)=>setName(e.target.value)}
  />
 
</FormControl>

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


<FormControl isRequired>
  <FormLabel>Confirm Password</FormLabel>
  <InputGroup>  
  <Input 
   pr='4.5rem'
  type={show? "text" : "password"} 
  onChange={(e)=>setCofirm(e.target.value)}
  />


<InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={clickHandler}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>

      </InputGroup>

  
</FormControl>

<FormControl isRequired>
  <FormLabel>upload Photo</FormLabel>
  <Input type='file'
  p={1} 
  accept='image/*'
  onChange={(e)=>setPhoto(e.target.files[0])}
  />
</FormControl>


<Button colorScheme='blue' variant='solid' onClick={submitHandler}>
    Submit
  </Button>

</VStack>
  )
}

export default Signup