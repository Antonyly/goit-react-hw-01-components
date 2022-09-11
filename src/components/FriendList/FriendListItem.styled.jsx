import styled from "styled-components"

export const Friend = styled.li`
    display: flex;
    align-items: center;
    width: 200px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px 3px rgba(156, 57, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 250ms linear, box-shadow 250ms linear 100ms;
`
export const Status = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${props => props.isOnline ? "green" : "red"};
`
export const Name = styled.p`
    font-weight: 900;
    margin-left: 20px;
`