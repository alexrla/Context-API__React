import styled from 'styled-components';

import Nome from './Nome';

export default function Alunos()  {
    return (
        <DivAlunos>
            <p>Alunos:</p>

            <Nome />
        </DivAlunos>
    )
}

const DivAlunos = styled.div`
    margin-top: 15px;

    p   {
        margin-bottom: 10px;
    }
`;