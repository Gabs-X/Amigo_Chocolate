import React from "react";
import { StyledBodyHeader, StyledTextTitle, StyledImg  } from "./Styles";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { ImageStyle, View } from "react-native";
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export function Header() {
    const navigation = useNavigation();
    return (
    <StyledBodyHeader >
        <Image source={require('../../assets/MeltEffect.png')}  style={{tintColor:'#964b00', resizeMode: 'stretch',position: 'relative',width:'100vw', height:120, left:-10,top:18 }}/>
        <StyledTextTitle>
            <TouchableOpacity style={{marginRight:38}} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>
            Amigo Chocolate
        </StyledTextTitle>
    </StyledBodyHeader>
    
 
    
)
    
    };

               
               