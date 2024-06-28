import React from 'react';
import { View, Text, Button } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { routesType } from "../../Routes/routes";
import * as ImagePicker from 'expo-image-picker';
import {
    StyledImage,
    StyledImageBorder,
    StyledTextTitle,
    StyledTouchableOpacity,
    StyledView,
    StyledViewImage,
    TextInputStyle
} from "./styles";
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  { Masks } from 'react-native-mask-input';

type GroupRegistrationType = {
    image?: string;
    name: string;
    qtdUsers: string;
    amount: string;
    dtReveal: string;
    description?: string;
}

export function RegistrationGroup() {
    const [newImage, setNewImage] = useState('');

    const navigation = useNavigation<routesType>();

    const { control, handleSubmit, setValue } = useForm<GroupRegistrationType>({
        defaultValues: {
            image: '',
            name: '',
            qtdUsers: '',
            amount: '',
            dtReveal: '',
            description: ''
        }
    });

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setValue('image', result.assets[0].uri);
            setNewImage(result.assets[0].uri);
        }
    };

    async function HandleOnClick(data: GroupRegistrationType) {
        try {
            console.log("Data :", data);

            const resposta = await axios.post(
                'http://localhost:3000/Group', {
                    Foto: data.image,
                    Nome: data.name,
                    QtdUsuario: data.qtdUsers,
                    Valor: data.amount,
                    DataRevelacao: data.dtReveal,
                    Descricao: data.description,
                    Id_Status: 1                        
            });

            
            if (resposta.status  === 201) {
                navigation.navigate("Home");
            }
        } catch (err) {
            console.log("Erro ao enviar os dados: ", err);
        }
    }

    return (
        <StyledView>
            <StyledTextTitle>Cadastrar Novo Grupo</StyledTextTitle>

            <StyledImageBorder onPress={pickImage}>
                <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                        <StyledViewImage>
                            {newImage ? <StyledImage source={{ uri: newImage }} /> : <MaterialCommunityIcons name="image-plus" size={40} color="black" onPress={pickImage}/>}          
                        </StyledViewImage>
                    )}
                />
            </StyledImageBorder>

            <Controller
                control={control}
                name="name"
                rules={{ required: "É necessário preencher o nome" }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Digite seu nome"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}
                        />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="qtdUsers"
                rules={{ required: "É necessário informar uma quantidade", }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Informe a quantidade de pessoas"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}
                        />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="amount"
                rules={{ required: "É necessário informar um valor" }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Informe o valor minimo de dinheiro"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}
                            mask={Masks.BRL_CURRENCY}
                        />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="dtReveal"
                rules={{ required: "É necessário informar uma data" }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Informe a data de revelação"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}
                            mask={Masks.DATE_DDMMYYYY}
                        />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="description"
                render={({ field }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Informe uma descrição"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}
                        />
                    </View>
                )}
            />

            <StyledTouchableOpacity onPress={handleSubmit(HandleOnClick)}>
                Cadastrar Grupo
            </StyledTouchableOpacity>
        </StyledView>
    )
}
