import React from "react";
import { StyledBodyHeader, StyledTextTitle, StyledImg  } from "./Styles";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { ImageStyle, View } from "react-native";
import { Image } from 'react-native'; 


export function Header() {
    return (
    <StyledBodyHeader >
        <Image source={require('../../assets/MeltEffect.png')}  style={{tintColor:'#964b00', resizeMode: 'stretch',position: 'relative',width:'110vw', height:120, left:-10,top:18 }}/>
        <StyledTextTitle>
            Amigo Chocolate
        </StyledTextTitle>
    </StyledBodyHeader>
    
 
    
)
    
    };

               
               