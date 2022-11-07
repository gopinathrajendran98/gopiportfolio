import React from 'react'
import {IconButton} from "@chakra-ui/button"
import {useColorMode} from "@chakra-ui/color-mode"
import {VStack,Flex,Heading,Spacer} from "@chakra-ui/layout"
import {
  FaSun,FaMoon,FaEnvelope,FaLinkedin,FaGithub,
} from "react-icons/fa"
import{ Link } from '@chakra-ui/react'
import{ ExternalLinkIcon } from '@chakra-ui/icon'
import Header from "./components/Header";
import Social from './components/Social'
import Profile from './components/Profile'


const App = () => {
  
  const {colorMode,toggleColorMode} = useColorMode();

  const isDark = colorMode === "dark";  
    

  return (
  
    <VStack p="5" > {/* vertical stack display*/}
      <Flex w="100%">
        
        <Heading ml="8" size="md" fontweight="semibold" color="cyan.500">
          Gopinath Rajendran
          </Heading>
          <Spacer/>
          <IconButton
          icon={<FaLinkedin/>} isRound="true" onClick={() => window.open("https://www.linkedin.com/feed/")}>

          </IconButton>
         
          <IconButton
          ml={2}
          icon={<FaEnvelope/>} isRound="true" onClick={() => window.open("https://mail.google.com")}>

          </IconButton>

          <IconButton
          ml={2}
          icon={<FaGithub/>} isRound="true" onClick={() => window.open("https://github.com/login")}>
           
          </IconButton> 

          <IconButton
          ml={8}
          icon={ isDark? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}>
           
          </IconButton>

      </Flex>
      <Header/>
      <Social/>
      <Profile/>
    </VStack>
        
    
  )   
}

export default App; 