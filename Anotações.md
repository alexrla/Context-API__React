# Context API

- **Disponibiliza os estados, de uma forma global (todos os componentes passam a ter acesso as informações passadas ao componente que está sendo coberto pelo _context api_ );**
- **`<UserContext.Provider>`: quem espalha o estado;**



### OBS.:

- **`children`:**

  ```react
  <Componente>
      <tag>...</tag>
  </Componente>
  
  function Componente({children})	{
      return (
          <div>
              {children} // Vai retornar o conteúdo da tag
          </div>
      );
  }
  ```




- **Com default e sem default:**

  ```react
  // Com default:
  export default algumaCoisa;
  
  import algumaCoisa from '...';
  
  // Sem default:
  export algumaCoisa;
  
  import { algumaCoisa } from '...';
  ```



- **Sem o Context API, temos de passas as informações via propriedades (props), entre os componentes. Agora, usando o Cotext API, fazemos com que o Context englobe todos os componentes dentro dele para quê assim, consigamos acesssar os dados disponibilizados pelo Context, em qualquer componente, de forma direta;**