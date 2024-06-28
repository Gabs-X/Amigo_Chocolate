import styled from "styled-components/native";

export const StyledView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;   
    background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};     
`
export const StyledTextTitle = styled.Text`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    margin-top:20px;
    margin-bottom:50px;
    color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`


export const StyledCardScrollView = styled.ScrollView`
    background-color: whitesmoke;
    border: 3px solid ${({ theme }) => theme.colors.TEXT_PRIMARY};
    border-radius: 10px;
    display:flex;
    width: 320px;
    height: 300px;
    gap:5px;
    padding: 10px;   
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 200px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    background-color: ${({ theme }) => theme.colors.INFO};
    margin-bottom:10px;
`

export const StyledText = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.TEXT_TITLE};
`