import styled from "styled-components/native";

export const StyledView = styled.View `
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};   
`
export const StyledImage = styled.Image`
  border-radius: 25px;
  width: 75px;
  height: 75px;
  border: 1px solid ${({ theme }) => theme.TEXT_PRIMARY};
  margin-bottom: 15px;
  margin-top: 15px;
`
export const TextStyled = styled.Text`
  color: whitesmoke;
  font-size: 18px;
  line-height: 38px;
  margin-bottom: 4px;
`

export const StyledCardScrollView = styled.ScrollView`
    background-color: whitesmoke;
    border: 3px solid ${({ theme }) => theme.colors.TEXT_PRIMARY};
    border-radius: 10px;
    display:flex;
    width: 320px;
    height: 100px;
    gap:5px;
    padding: 10px;   
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
export const TextTitlesButton = styled.Text`
 color: whitesmoke;
  font-size: 24px;
  line-height: 38px;
  font-weight: bold;

`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    margin-top: 5px;
    background-color: ${({ theme }) => theme.colors.TEXT_SECUNDARY};
    color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
    display: flex;
    gap: 5;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    width: 285px;
   
`
