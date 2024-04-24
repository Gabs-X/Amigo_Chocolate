import { styled } from 'styled-components/native'

export const StyledTextTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    color: ${({ theme }) => theme.colors.TEXT_TITLE};
`


export const StyledText = styled.Text`
    color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`

export const StyledBodyHeader = styled.Text`
    width: 101%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.INFO };
    align-content: center;
    text-align: center;
    justify-content: center;
    position: relative; 
`
export const StyledImg = styled.Text`
color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`