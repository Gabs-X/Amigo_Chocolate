import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RoutesNavigationType } from '../../Routes/routes';
import { StyledImage, StyledView, TextTitles, TextSubtitle, TextStyled, TextInputStyle, StyledTouchableOpacity, StyledInputView, StyledTextDescription, StyledCardScrollView } from './styles';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { PartCard } from '../../Components/PartCard';
import { useIsFocused } from '@react-navigation/native';

type Props = NativeStackScreenProps<RoutesNavigationType, 'GroupHome'>;

type GroupType = {
    Foto: string,
    Nome: string,
    QtdUsuario: string,
    Valor: string,
    DataRevelacao: string,
    Descricao:  string,
    Id_Status: number,
    id: number
}

export function GroupInfo({ route }: Props) {
  const Groupdata: GroupType = route.params as GroupType;
  const { control, handleSubmit } = useForm();
  const [gruposUsuario, setGruposUsuario] = useState<any[]>([]);
  const focus = useIsFocused();


  useEffect(() => {
    getGruposUsuario()
}, [focus])
  type FormValues = {
    Email: string;
  }

  

async function getGruposUsuario() {
    try {
      const nome = Groupdata.groupData.Nome;
      console.log("Nome do grupo",nome);
        const apiUrl = `http://localhost:3000/UserGroup?NomeDoGrupo=${nome}`;
        const resposta = await axios.get(apiUrl);
        console.log("retorna algum carai",resposta)
        if(resposta.data.length = 0){
            alert("Nenhum participante encontrado neste grupo!");
            return;
        }else{
            {resposta.data.map(async (data) => {
               console.log("Emailll",data.email);
                const apiUrl2 = `http://localhost:3000/User?Email=${data.email}`;
                const userData = await axios.get(apiUrl2)   
                setGruposUsuario(userData.data)
                console.log("teste", userData);
            })}
        }

        
    } catch (err) {
        console.log("Erro ao enviar os dados: ", err);
    }
}

  async function SendEmail(data: FieldValues) {
    const resposta = await axios.post(
        'http://localhost:3000/UserGroup', {
            NomeDoGrupo: Groupdata.groupData.Nome,
            QtdUsuario: Groupdata.groupData.QtdUsuario,
            Usuarios: data.email,                
    });
    if (resposta.status  === 201) {
        alert("Email enviado com sucesso!");
    }
    getGruposUsuario();
  }

  return (
    <StyledView>
      <StyledImage source={Groupdata.groupData.Foto ? { uri: Groupdata.groupData.Foto } : require('../../assets/socorro.png')} />
      <TextTitles>Adicionar Participante:</TextTitles>
      
      <Controller
                control={control}
                name="email"
                rules={{ required: "É necessário preencher o email" }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Insira o Email"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur} />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )} 
        />
      
      <StyledTouchableOpacity onPress={handleSubmit(SendEmail)}>
        <TextStyled>Enviar Email</TextStyled>
        <MaterialCommunityIcons name="email-send" size={24} color="white" />
      </StyledTouchableOpacity>
      <TextSubtitle style={{}}>Participantes:</TextSubtitle>
      <StyledCardScrollView>
                
                    {/* {gruposUsuario.map((grupo) => (
                        <PartCard key={grupo.id} data={grupo} />
                    ))}
                 */}
            </StyledCardScrollView>
            <StyledTouchableOpacity>Fazer Sorteio!</StyledTouchableOpacity> 
    </StyledView>
  );
}


