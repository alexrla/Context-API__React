import { useState, useEffect, useContext } from "react"

import styled from 'styled-components';

import { UserContext } from "../contexts/User";

export default function Nome()  {
    const { nomes, setNomes } = useContext(UserContext);
    const [input, setInput] = useState("")

    useEffect(() => {
        const nomesStorage = localStorage.getItem("nomes");

        if(nomesStorage)    {
            setNomes(JSON.parse(nomesStorage));
        }
    }, [setNomes]);

    useEffect(() => {
        localStorage.setItem("nomes", JSON.stringify(nomes));
    }, [nomes]);

    function addNome()  {
        setNomes([...nomes, input]);

        setInput("");
    }

    return (
        <DivNome>
            <ul>
                {nomes.map((nome) => (
                        <li key={nome}>{nome}</li>
                ))}
            </ul>

            <DivEntrada>
                <input type="text" value={input} placeholder="Informe o nome de um aluno" onChange={(event) => setInput(event.target.value)} />
                <button className="btn" onClick={addNome}>Adicionar nome</button>
            </DivEntrada>
        </DivNome>
    )
}

const DivNome = styled.div`
    ul {
        align-items: center;

        display: flex;

        flex-direction: column;

        width: 500px;
    }

    li  {
        margin-bottom: 10px;
    }
`;

const DivEntrada = styled.div`
    display: flex;

    margin-top: 40px;

    input {
        border: 1px solid #833180;

        padding-left: 5px;
    }

    button {
        background-color: #833180;

        border: none;

        color: #FFFFFF;

        cursor: pointer;

        padding: 5px;
    }

    button:hover {
        background-color: #741572;

        color: #FFFFFF;
    }
`;