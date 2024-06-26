import { styled } from 'styled-components/native'

export const StyledView = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`

export const TextInputStyle = styled.TextInput`
    height: 40px;
    width: 300px;
    text-align: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_SECUNDARY};
    color: ${({ theme }) => theme.colors.TEXT_SECUNDARY};
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 240px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.INFO};
`

export const StyledViewPassword = styled.View`
    flex-direction: row;
      align-items: center;
`

export const StyledInputPassword = styled.TextInput `
    height: 40px;
    width: 267px;
    text-align:  center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_SECUNDARY};
    color: ${({ theme }) => theme.colors.TEXT_SECUNDARY};
`

export const StyledTouchablePassword = styled.TouchableOpacity`
    padding-left: 10;
`

export const StyledTextTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`

export const StyledText = styled.Text`
    color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`

export const StyledViewImage = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    background-color: gray !important;
`

export const StyledImageBorder = styled.TouchableOpacity`
    margin-bottom:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    background-color: gray !important;
`

export const StyledImage = styled.Image`
    border-radius: 50px;
    width: 100px;
    height: 100px;
`