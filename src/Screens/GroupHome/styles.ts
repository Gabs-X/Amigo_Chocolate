import styled from "styled-components/native";

export const StyledView = styled.View `
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};   
`
export const StyledImage = styled.Image`
  border-radius: 50px;
  width: 150px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.TEXT_PRIMARY};
  margin-bottom: 30px;
`
export const TextStyled = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
  font-size: 18px;
  line-height: 38px;
  margin-bottom: 4px;
`

export const StyledTextDescription = styled.View`

`

export const StyledInputView = styled.View`

`

export const TextTitles = styled.Text`
  font-size: 24px;
  line-height: 38px;
  font-weight: bold;
`

export const TextSubtitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: grey;
  font-weight: lighter;
`
export const TextInputStyle = styled.TextInput`
    height: 40px;
    width: 285px;
    text-align: center;
    align-items:center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_SECUNDARY};
    color: ${({ theme }) => theme.colors.TEXT_SECUNDARY};
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    background-color: ${({ theme }) => theme.colors.TEXT_SECUNDARY};
    color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
    display: flex;
    text-align:center;
    justify-content: center;
    width: 285px;
    margin-top: 5px;
`
