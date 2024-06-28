import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RoutesNavigationType } from '../../Routes/routes';
import { StyledImage, StyledView, TextTitles, TextSubtitle, TextStyled, TextInputStyle, StyledTouchableOpacity, StyledInputView, StyledTextDescription } from './styles';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { routesType } from "../../Routes/routes";
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

export function GroupHome({ route }: Props) {
  const Groupdata: GroupType = route.params as GroupType;
  const navigation = useNavigation<routesType>();
  const { control, handleSubmit } = useForm();

  type FormValues = {
    Email: string;
  }
  
  async function SendEmail(data: FieldValues) {
    console.log("teste", data.Email);
  }

  return (
    <StyledView>
      <StyledImage source={Groupdata.groupData.Foto ? { uri: Groupdata.groupData.Foto } : require('../../assets/socorro.png')} />
      
      <TextTitles>{Groupdata.groupData.Nome}</TextTitles>
      <TextSubtitle>{Groupdata.groupData.DataRevelacao}</TextSubtitle>
      
      <StyledTextDescription>{Groupdata.groupData.Descricao}</StyledTextDescription>
      <TextStyled>Valor Maximo de {Groupdata.groupData.Valor}</TextStyled>

        <StyledTouchableOpacity onPress={() => navigation.navigate('GroupInfo', { groupData: Groupdata.groupData })}> 
          Participantes
        </StyledTouchableOpacity>
        <StyledTouchableOpacity> 
          Ver Amigo chocolate
        </StyledTouchableOpacity>
      

    </StyledView>
  );
}