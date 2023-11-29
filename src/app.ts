
import { AlunoService } from './service/aluno-service';
import { DisciplinaService } from './service/disciplina-service';
import { CursoService } from './service/curso-service';
import { Disciplina } from './entity/disciplina';
import promptSync from 'prompt-sync';
import { Curso } from './entity/curso';
import { Aluno } from './entity/aluno';

const prompt = promptSync()

const disciplinas = [
  new Disciplina("Algoritmos e Estrutura de Dados I", 24),
  new Disciplina("Matemática Discreta", 48),
  new Disciplina("Metodologia Científica", 36),
  new Disciplina("Arquitetura de Computadores", 60),
]

const cursos = [
  new Curso("Engenharia Mecânica Naval", "Integral", [1,2,3], disciplinas )
]

const alunos = [
  new Aluno("Lelly", 25, 1, cursos)
]




export class App{
  static execute(){
    var execucao = true;
      do{
        const opcao = App.opcoes()
        
        switch(opcao){
          case '1':
            AlunoService.gerenciarAlunos(alunos, cursos)
            break;
          case '2':
            DisciplinaService.gerenciarDisciplinas(disciplinas)
            break;
          case '3':
            CursoService.gerenciarCursos(disciplinas, cursos)
            break;
          case '4':
            execucao = false;
            console.log('Encerrando o programa')
            break
        }
    } while(execucao)
}

  static opcoes(){
    console.log('SISTEMA DE GESTÃO EDUCACIONAL')
    console.log('1-Gerenciar ALUNOS;')
    console.log('2-Gerenciar DISCIPLINAS')
    console.log('3-Gerenciar CURSOS')
    console.log('4-SAIR')

    const opcaoSelecionada = prompt('Seleciona uma opção: ')

    return opcaoSelecionada
  }
}


App.execute()
