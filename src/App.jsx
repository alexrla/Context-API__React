import styled from 'styled-components';

import UserProvider from './contexts/User';

import Alunos from './components/Alunos';

export default function App() {
  return (
    <UserProvider>
      <DivApp className="App">
        <h1>Escola José de Anchieta</h1>
        <div className="horizontalLine"></div>

        <div className="studentList">
            <p>Lista de estudantes - 7º ano</p>
            <Alunos />
        </div>
      </DivApp>
    </UserProvider>
  );
}

const DivApp = styled.div`
    align-items: center;

    color: #FFFFFF;

    display: flex;

    flex-direction: column;

    justify-content: center;

    h1  {
      font-size: 26px;

      font-weight: bold;

      padding-top: 20px;
    }

    .horizontalLine {
      background-color: #FFFFFF;

      height: 1px;

      margin-top: 10px;

      width: 320px;
    }

    .studentList {
      align-items: flex-start;

      display: flex;

      flex-direction: column;

      margin-top: 20px;

      width: 500px;
    }
`;
