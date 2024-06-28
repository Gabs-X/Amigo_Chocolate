import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { routesType } from "../../Routes/routes";
import * as ImagePicker from 'expo-image-picker';
import {
    StyledImage,
    StyledImageBorder,
    StyledInputPassword,
    StyledTextTitle,
    StyledTouchableOpacity,
    StyledTouchablePassword,
    StyledView,
    StyledViewImage,
    StyledViewPassword,
    TextInputStyle
} from "./styles";
import axios from "axios";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type UserSignUpType = {
    image: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}



export function SignUp() {
    const [newImage, setNewImage] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const navigation = useNavigation<routesType>();

    
    const { control, handleSubmit } = useForm<UserSignUpType>({
        defaultValues: {
            image: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        };
        const toggleShowConfirmPassword = () => {
            setShowConfirmPassword(!showConfirmPassword);
            };


    async function HandleOnClick(data: UserSignUpType) {
        console.log("Data :", data);

        data.image = newImage;

        

        if (data.password != data.confirmPassword) {
            alert("A senha de confrimação está incorreta")
        }
        else {
            try {
                const resposta = await axios.post(
                    'http://localhost:3000/User', {
                Image: data.image,
                    Name: data.name,
                    Email: data.email,
                    Password: data.password,
                });
 
                if (resposta.status === 201) {
                    navigation.navigate("Login");
                }
            } catch (err) {
                console.log("Erro ao enviar os dados: ", err);
            }
        }
    }

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setNewImage(result.assets[0].uri);
        }
    };

    return (
        <StyledView>
            <StyledTextTitle>Novo Cadastro</StyledTextTitle>
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
                name="email"
                rules={{ required: "É necessário preencher o email", }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Digite seu e-mail"
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
                name="password"
                rules={{ required: "É necessário preencher a senha"}}
                render={({ field: {value, onChange,onBlur}, fieldState: { error } }) => (
                    <StyledViewPassword>
                        <StyledInputPassword
                            secureTextEntry={showPassword}
                            placeholder="Senha"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                        <StyledTouchablePassword onPress={toggleShowPassword}> 
                            <Ionicons
                                name={showPassword ? "eye-off" : "eye"}
                                size={24}
                                color="black"
                            />
                        </StyledTouchablePassword>
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </StyledViewPassword>
                )}
            />

            <Controller
                control={control}
                name="confirmPassword"
                rules={{ required: "É necessário confirmar a senha" }}
                render={({  field: {value, onChange,onBlur}, fieldState: { error } }) => (
                    <StyledViewPassword>
                        <StyledInputPassword
                            secureTextEntry={showConfirmPassword}
                            placeholder="Confirmar Senha"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                        />
                        <StyledTouchablePassword onPress={toggleShowConfirmPassword}> 
                            <Ionicons
                                name={showConfirmPassword ? "eye-off" : "eye"}
                                size={24}
                                color="black"
                            />
                        </StyledTouchablePassword>
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </StyledViewPassword>
                )}
            />

            <StyledTouchableOpacity onPress={handleSubmit(HandleOnClick)}>
                <Text>Cadastrar</Text>
            </StyledTouchableOpacity>
        </StyledView>
    )
}