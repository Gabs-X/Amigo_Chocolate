import { styled } from 'styled-components/native'
import MaskInput, { Masks } from 'react-native-mask-input';

export const StyledView = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`

export const TextInputStyle = styled(MaskInput)`
    height: 40px;
    width: 300px;
    text-align: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_SECUNDARY};
    color: ${({ theme }) => theme.colors.TEXT_SECUNDARY};
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

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 240px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom:20px;
    color: white !important;
    background-color: ${({ theme }) => theme.colors.INFO};
`

export const StyledTextTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-top:60px;
    margin-bottom: 20px;
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
`

export const StyledImage = styled.Image`
    border-radius: 50px;
    width: 100;
    height: 100;
`