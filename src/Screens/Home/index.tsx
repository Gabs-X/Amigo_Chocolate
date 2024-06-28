import { useIsFocused, useNavigation } from "@react-navigation/native";
import { routesType } from "../../Routes/routes";
import { StyledCardScrollView, StyledText, StyledTextTitle, StyledTouchableOpacity, StyledView } from "./styles";
import { GroupCard } from "../../Components/GroupCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView } from "react-native";

export function Home() {
    const [gruposUsuario, setGruposUsuario] = useState<any[]>([]);
    const navigation = useNavigation<routesType>();
    const focus = useIsFocused();
    useEffect(() => {
        getGruposUsuario()
    }, [focus])

    async function getGruposUsuario() {
        try {
            const apiUrl = `http://localhost:3000/Group`;
            const resposta = await axios.get(apiUrl);

            setGruposUsuario(resposta.data)

        } catch (err) {
            console.log("Erro ao enviar os dados: ", err);
        }
    }

    return (
   
        <StyledView>
           
           <StyledTextTitle>     
            <FontAwesome6 name="people-group" size={80} color="#964b00" />      
                Grupos
            </StyledTextTitle>
            
            <StyledCardScrollView>
                
                    {gruposUsuario.map((grupo) => (
                        <GroupCard key={grupo.id} data={grupo} />
                    ))}
                
            </StyledCardScrollView>
            

            <StyledTouchableOpacity
                onPress={() => { navigation.navigate("RegistrationGroup") }}
            >
                <StyledText>Cadastrar Grupo</StyledText>
            </StyledTouchableOpacity>
            
        </StyledView>
  
    )
}