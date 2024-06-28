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
export function PartCard(data: GroupType) {
    const navigation = useNavigation<routesType>();
    return (
        <StyledView>
            <Card >
                <StyledImageBorder >
                <StyledImage source={data.data.Foto ? {uri: data.data.Foto} : require('../../assets/socorro.png')  } />
                </StyledImageBorder>
                <CardTitles>
                    {data.data.Nome}
                </CardTitles>
            </Card>
        </StyledView>
    )
}