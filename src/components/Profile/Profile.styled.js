import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    background-color: #F7F7F7;
    margin: 0 auto;
    border: 2px solid #EEEEEE;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;
    margin-bottom: 100px;
`

export const Box = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

export const Image = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 150px;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid #EEEEEE;
`

export const Username = styled.p`
    font-weight: bold;
`

export const Tag = styled.p`
    color: #929AAB;
`

export const Location = styled.p`
    color: #929AAB;
    
`

export const List = styled.ul`
    background-color: #EEEEEE;
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Item = styled.li`
    border: 1px solid #F7F7F7;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Text = styled.span`
    color: #929AAB;
`

export const Number = styled.span`
    font-weight: bold;
`