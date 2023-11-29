<div align="center"> 
    <h1>
        Módulo 02 - Projeto de POO - Bootcamp Back-End Ada Tech
    </h1>
</div>


<h4>
    Projeto final do módulo 2 da Bootcamp de Back-End com JS/TS da Ada Tech em parceria com o Ifood
</h4>

<div align="center"> 
    <h2>
    Sobre o projeto
    </h2>
</div>

<div align="justify">
    <p> Este projeto é um sistema de feito em Typescript que permite o cadastro, atualização, consulta e remoção de Alunos, Disciplinas e Cursos. </p>
</div>

<div align="center"> 
    <h2>
    Funcionalidades
    </h2>
</div>

> ## 1. Gerenciar alunos


- `Cadastrar Aluno: ` Permite ao usuário cadastrar um novo aluno e adicionar informações como idade, nome e curso. 
- `Consultar Aluno: ` Permite buscar as informações de nome, idade e informações do curso que o aluno esta matriculado. 
- `Atualizar Aluno: ` Permite a atualizar os dados do aluno como nome, idade e curso.  
- `Remover Aluno: ` Permite remover todos dados do aluno do sistema. 
- `Sair: ` Permite ao usuário retonar ao menu principal. 


> ## 2. Gerenciar disciplinas
- `Cadastrar disciplina: ` Permite ao usuário cadastrar uma nova disciplina e adicionar informações como: nome, carga horária.  
- `Consultar disciplina: ` Permite buscar as informações de nome, carga horária. 
- `Atualizar disciplina: ` Permite atualizar os dados da disciplina como nome e carga horária.   
- `Remover disciplina: ` Permite remover todas as informações da disciplina do sistema. 
- `Sair: ` Permite ao usuário retonar ao menu principal. 


> ## 3. Gerenciar cursos
- `Cadastrar curso: ` Permite ao usuário cadastrar um novo curso e adicionar informações como: nome do curso, turno e vincular as disciplinas que serão ministradas no curso.  
- `Consultar curso: ` Permite buscar as informações de nome, turno e disciplinas vinculados ao curso. 
- `Atualizar disciplina: ` Permite atualizar os dados do curso como nome, turno e disciplinas vinculadas.   
- `Remover disciplina: ` Permite remover todas as informações da disciplina do sistema. 
- `Sair: ` Permite ao usuário retonar ao menu principal. 


> ## 4. Sair
Esta funcionalidade encerra o programa. 


<div align="center">
<h2>
  Estrutura do Projeto
</h2>
</div>
<div align="left">
  <p>
O projeto é organizado em camadas, que estão subdividas no código em forma de diretórios, de modo que:

`service:` é o diretório que contém todas as classes de implementação de regras de negócio do projeto.

`entity:` é o diretório que contém todas as classes de definição da modelagem de entidades do projeto.

`app.ts:` é a classe responsável pela execução da aplicação, que contém os objetos concretos que simulam dados de um banco de dados, assim como o fluxo principal da aplicação, realizando a chamada para os demais componentes.


<div align="center">
<h2>
  Executando o projeto
</h2>
</div>
<div align="left">

Para executar o projeto na sua máquina, siga os passos a seguir:

1. Clone o projeto, utilizando o comando:

    ```bash
    git clone https://github.com/ailezigvilar/backend-ada-mod02-gestao-educacional.git
    ```

1. Execute o comando abaixo para garantir a instalação dos pacotes necessários para a boa execução do projeto:
    ```bash
    npm install
    ```

1. Execute a aplicação node através do comando a seguir:
    ```bash
    ts-node "<pasta-onde-voce-clonou-o-projeto>\backend-ada-mod02-gestao-educacional\src\app.ts"
    ```
    Certifique-se de substituir "pasta-onde-voce-clonou-o-projeto" pelo caminho absoluto da pasta onde você clonou o projeto