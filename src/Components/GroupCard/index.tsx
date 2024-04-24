import { Text, View } from "react-native";

import {
    Card,
    CardTitles,
    StyledImage,
    StyledImageBorder,
    StyledTouchableOpacity,
    StyledView,
    TextStyled,
    TextTitles
} from "./styles"
import { useNavigation } from "@react-navigation/native";
import { routesType } from "../../Routes/routes";
import { FontAwesome } from '@expo/vector-icons';
import React from "react";


type GroupType = {
    data: [  
        Foto: string,
        Nome: string,
        QtdUsuario: string,
        Valor: string,
        DataRevelacao: string,
        Descricao:  string,
        Id_Status: number,
        id: number
    ];
    
}
export function GroupCard(data: GroupType) {
    const navigation = useNavigation<routesType>();
    console.log(data,"data CARAI");
    return (
        <StyledView>
            <Card>
                <StyledImageBorder>
                <StyledImage source={require('../../assets/socorro.png') } />
                </StyledImageBorder>
                <CardTitles>
                    {data.data.Nome}
                </CardTitles>
                <StyledTouchableOpacity >

                <FontAwesome name="pencil-square" size={34} color="#f5f5dc" style={{alignItems: 'center', justifyContent: 'center'}} onPress={() => { navigation.navigate("RegistrationGroup") }}/>
                </StyledTouchableOpacity>
            </Card>
        </StyledView>
    )
}