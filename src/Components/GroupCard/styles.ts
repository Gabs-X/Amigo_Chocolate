import styled from "styled-components/native";


export const StyledView = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 300px;
  height: 100px;

  
  background-color: ${({ theme }) => theme.colors.INFO};
  border-radius: 12px;
`

export const CardTitles = styled.View`
  color: ${({ theme }) => theme.colors.TEXT_TITLE};
  font-size:15px;
  height: 40px;
  width: 120px;
  text-align: center;
`

export const TextStyled = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 4px;
`

export const TextTitles = styled.Text`
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 4px;
  font-weight: bold;
`

export const TextSubtitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`

export const StyledImage = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`

export const StyledImageBorder = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 75px;
    height: 75px;
    background-color: gray !important;
`

export const StyledTouchableOpacity = styled.View`
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 50px;

`