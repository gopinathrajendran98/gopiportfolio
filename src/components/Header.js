import React from 'react'
import {Button} from "@chakra-ui/button"
import {useColorMode} from "@chakra-ui/color-mode"
import {Image} from "@chakra-ui/image"
import {Circle,Stack,Flex,Box,Text} from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"

 
const Header = () => {

    const {colorMode} = useColorMode()
    const isDark = colorMode === "dark";
    
    const [isNotSmallerScreen] = useMediaQuery ("(min-width:400px)"); 

  return (   
    <Stack>
        {isNotSmallerScreen && ( 
        <Circle 
       position= "absolute"
        bg="blue.100"
        opacity="0.1"
        w="150px"
        h="150px"
        alignSelf="flex-end"  
        margin="90px"
        />  
        )}
        
      <Flex   direction={isNotSmallerScreen ? "row" : "column"} 
      spacing="200px" 
       p={isNotSmallerScreen?"32":0}
       alignSelf="flex-start"
      
      >
        
            <Box mt={isNotSmallerScreen ? 0 : 20} alignSelf="flex-start" >
                <Text fontSize="5x1" fontWeight="semibold" color="hotpink">Hi I AM</Text>
                <Text fontSize="30px" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text">Gopinath Rajendran</Text>
                <Text fontSize="15px" p="5px" color={ isDark ? "gray.200" : "gray.500"}>
                    I Am Front End Devoleper.
                </Text>
                <Button mt={5} colorScheme="blue">Hire Me</Button>
            </Box>
            <Image
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            margin="20px"
            alignSelf="centre"                
            borderRadius="full"
            backgroundColor="transparent" 
            boxShadow="1g"
            boxSize="150px"
            zIndex={1}
            src="https://us.123rf.com/450wm/shirokumadesign/shirokumadesign2111/shirokumadesign211100044/177160874-young-man-cartoon-character-people-face-profiles-avatars-and-icons-close-up-image-of-pointing-man-ve.jpg?ver=6" >
              </Image>
           </Flex>
    </Stack>
  )
}

export default Header;
 