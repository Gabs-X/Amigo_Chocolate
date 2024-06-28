import { Text, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { routesType } from "../../Routes/routes";
import { FontAwesome6 } from '@expo/vector-icons';
import { useAuth } from "../../contexto/auth";
import {
    StyledView,
    StyledTouchableOpacity,
    TextInputStyle,
    StyledText,
    StyledTouchableOpacityLogo,
    StyledViewLogo,
    StyledTextTitle,
    StyledViewPassword,
    StyledInputPassword,
    StyledTouchablePassword
} from "./styles";
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


type UserLoginType = {
    email: string;
    password: string;
}


export function Login() {
    const { login } = useAuth();
    const navigation = useNavigation<routesType>();
    const [showPassword, setShowPassword] = useState(true);

    const { control, handleSubmit } = useForm<UserLoginType>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        };
  
    async function HandleOnClick(data: UserLoginType) {
        try {
            await login(data.email, data.password)
        } catch (erro) {
            console.log('Erro ao enviar dados: ', erro);
        }
    }

    return (
        
        <StyledView>
             
            <StyledTextTitle>     
            <MaterialIcons name="account-circle" size={80} color="#964b00" />      
                Login
            </StyledTextTitle>
            <Controller
                control={control}
                name="email"
                rules={{ required: "É necessário preencher o email" }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Digite seu e-mail"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur} />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )} 
            />

            {/* <Controller
                control={control}
                name="password"
                rules={{ required: "É necessário preencher a senha" }}
                render={({ field, fieldState: { error } }) => (
                    <View>
                        <TextInputStyle
                            placeholder="Digite sua senha"
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur} />
                        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
                    </View>
                )} /> */}



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





            <StyledText onPress={() => navigation.navigate("RecoverPassword")}>
                Esqueceu a senha?
            </StyledText>

            <StyledTouchableOpacity onPress={handleSubmit(HandleOnClick)}>
                <Text>Entrar</Text>
            </StyledTouchableOpacity>

            <StyledText onPress={() => navigation.navigate("SignUp")}>
                Ou cadastre-se aqui
            </StyledText>
        </StyledView>
    )
}