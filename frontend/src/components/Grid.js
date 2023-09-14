import React from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;  
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none" }
    }
    `;

    export const Td = styled.td`
        padding-top: 15px;
        text-align: ${(props) => (props.alignCenter ? "center" : "start")}
        width: ${(props) => (props.width ? props.width : "auto" )}

        @media (max-width: 500px) {
            ${(props) => props.onlyweb && "display: none" }
        }
    `;

const Grid = ({ users }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th>Setor</Th>
                    <Th>Cargo</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="20%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%"onlyWeb>
                            {item.fone}
                        </Td>
                        <Td width="10%">{item.setor}</Td>
                        <Td width="25%">{item.cargo}</Td>
                        <Td alignCenter width="5%">
                            
                        </Td>
                         <Td alignCenter width="5%">
                            
                        </Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Grid;