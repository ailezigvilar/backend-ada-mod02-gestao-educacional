import { App } from "@modules/app";
import { Aluno } from "../entity/aluno"; 
import promptSync from 'prompt-sync';
import { Curso } from "@modules/entity/curso";
import { CursoService } from "./curso-service";

const prompt = promptSync()

 export class AlunoService {

    static gerenciarAlunos(listaAlunos: Array<Aluno>, listaCursos: Array<Curso>){
    
     while (true) {
        const opcao = this.opcoes() 

        switch (opcao) {
            case '1':
                this.cadastrarAluno(listaAlunos, listaCursos)
                break;
            case '2': 
                this.consultarAlunos(listaAlunos)
                break; 
            case '3': 
                this.removerAluno(listaAlunos)
                break; 
            case '4': 
                this.atualizarAluno(listaAlunos, listaCursos)
                break; 
            case '5':
                App.execute()
                break;
        }

     }
        
    }
    

    static cadastrarAluno(listaAlunos: Array<Aluno>, listaCursos: Array<Curso>) {
        console.log('======= Cadastrar Aluno ========= ' )
        const nome = String(prompt('Nome do aluno(a): '))
        const idade = Number(prompt('Idade do aluno(a): '))
        const idCurso = Number(prompt('ID do Curso: '))
        
        const novoAluno = new Aluno(nome, idade, idCurso, listaCursos)
    
        return listaAlunos.push(novoAluno)
    }

    static consultarAlunos(lista: Array<Aluno>) {

        if(lista){
            console.log('\n========= Lista de Alunos =========')
            lista.forEach((aluno) => {
                console.log(`ID: ${ aluno.id}`)
                console.log(`Nome: ${ aluno.nome}`)
                console.log(`Idade: ${ aluno.idade}`)
                CursoService.consultarCurso(aluno.curso)
                console.log('\n')
            })
        }

    }

    static removerAluno (lista: Array<Aluno>) {

        if(lista){
            this.consultarAlunos(lista)
        }

        const id = Number (prompt('informe o ID do aluno a ser removido:  '))

        const indiceAlunoParaDeletar = this.obterIndiceDoAlunoPorId(lista, id)

        lista.splice(indiceAlunoParaDeletar,1)
        console.log(`O aluno ${id} foi removido com sucesso!`)

    }

    static obterAlunoPorId(lista: Array<Aluno>, id: number){
        const aluno = lista.find(aluno => aluno.id === id)
        return aluno
    }

    static obterIndiceDoAlunoPorId(lista: Array<Aluno>, id: number) {
        const aluno = this.obterAlunoPorId(lista, id)

        const indiceAluno = lista.indexOf(aluno!)

        return indiceAluno
    }

    static atualizarAluno(listaAlunos: Array<Aluno>, listaCursos: Array<Curso>) {
        if(listaAlunos){
            this.consultarAlunos(listaAlunos)
        }

        const id = Number(prompt('Informe o Id do aluno a ser atualizado: '))

        const alunoParaAtualizar = this.obterAlunoPorId(listaAlunos, id)

        if (alunoParaAtualizar){
            
            const nome= String(prompt('Digite o novo nome do aluno: '))
            const idade = Number(prompt('Digite a nova idade do aluno: '))
            const idCurso = Number(prompt('Informe o id do novo curso do aluno: '))

            alunoParaAtualizar.nome = nome; 
            alunoParaAtualizar.idade = idade; 
            alunoParaAtualizar.curso = Curso.obterCursoPeloId(idCurso, listaCursos)!

        }

    }

    static opcoes () {
        console.log('============ Gerenciar Alunos ============')
        console.log('1. Cadastrar Aluno')
        console.log('2. Consultar Aluno')
        console.log('3. Remover Aluno')
        console.log('4. Atualizar Aluno')
        console.log('5. Sair')

        return prompt ('Selecione uma opção: ')
    }


 }