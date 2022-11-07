import React from 'react'
import {Box,Flex,Heading,Text} from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
import { Icon } from "@chakra-ui/icon"
import { DiReact,DiJavascript} from "react-icons/di"

const Profile = () => {

    const [isNotSmallerScreen] = useMediaQuery ("(min-width:600px)"); 

  return (
    <Flex 
    direction={ isNotSmallerScreen ? "row" :"column"}
    
    maxwidth={{base:"100vh",md:"130vh",lg:"130vh",xl:"130vh"}}>

        <Box alignSelf="center" display="contents" px="32" py="16"  >
            <Heading fontWeight="extrabold" fontSize="3xl" color="cyan.500"  size="4x1" >
              6+
            </Heading>
            <Text fontSize="2x1"  color="gray.600"  >
             Month of Experience
            </Text>
            
            
                <Flex 
                rounded="xl"
                direction='column'
                mt={4}
                w="30vh"
                bg="blue.400"
                h="30vh"
                justify="flex-end">
                    <Icon color="white" p="4" w="24" as={DiReact}/>
                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        React
                    </Text>       

                </Flex>
                <Flex 
                rounded="xl"
                direction='column'
                mt={4}
                w="30vh"
                bg="gray.100"
                h="30vh"
                justify="flex-end"
                ml={isNotSmallerScreen ? 4 : 0 }
                _hover={{bg:"#FBD601"}}>
                    <Icon color="black" p="4" w="24" h="24" as={DiJavascript}/>
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        Javascript
                    </Text>       

                </Flex>
        </Box>    
    </Flex>
  )
}

export default Profile;
