import { Curso } from "../entity/curso"; 
import { Disciplina } from "../entity/disciplina";
import promptSync from 'prompt-sync';
import { DisciplinaService } from "./disciplina-service";
import { App } from "@modules/app";

const prompt = promptSync()

 export class CursoService {

    static gerenciarCursos(listaDisciplinas: Array<Disciplina>, listaCursos: Array<Curso>){
    
     while(true) {
        const opcao = this.opcoes() 

        switch (opcao) {
            case '1':
                this.cadastrarCurso(listaDisciplinas, listaCursos)
                break;
            case '2': 
                this.consultarCursos(listaCursos)
                break; 
            case '3': 
                this.removerCurso(listaCursos)
                break; 
            case '4': 
                this.atualizarCurso(listaDisciplinas, listaCursos)
                break; 
            case '5': 
                App.execute()
                break; 

     }
        
    }
}
    
    static cadastrarCurso(listaDisciplinas: Array<Disciplina>, listaCursos: Array<Curso>) {
        console.log('======= Cadastrar Curso ========= ' )
        const nome = String(prompt('Nome do curso: '))
        const turno = String(prompt('Turno do curso: '))
        const idsDisciplinas = prompt('IDs das Disciplinas separados por vírgula: ')
            .split(",").map(str => parseInt(str))

        const novoCurso = new Curso(nome, turno, idsDisciplinas, listaDisciplinas)

        return listaCursos.push(novoCurso)
    }

    static consultarCursos(lista: Array<Curso>) {
        if(lista){
            console.log('\n========= Lista de Cursos =========')
            lista.forEach((curso) => {
                console.log(`ID do Curso: ${curso.id}`)
                console.log(`Nome do Curso: ${curso.nome}`)
                console.log(`Turno: ${curso.turno}`)
                DisciplinaService.consultarDisciplinas(curso.disciplinas)
                
            })
        }

    }

    static consultarCurso(curso: Curso) {
        if(curso){
            console.log(`ID do Curso: ${curso.id}`)
            console.log(`Nome do Curso: ${curso.nome}`)
            console.log(`Turno: ${curso.turno}`)
            DisciplinaService.consultarDisciplinas(curso.disciplinas)
                
            }
        }

    static removerCurso (lista: Array<Curso>) {

        if(lista){
            this.consultarCursos(lista)
        }

        const id = Number(prompt('Informe o ID do curso a ser removido: '))
        
        const indiceCursoParaDeletar = this.obterIndiceDoCursoPorId(lista, id)

        lista.splice(indiceCursoParaDeletar, 1)
        console.log(`O curso ${id} foi removido com sucesso!`)


    }


    static atualizarCurso(listaDisciplinas: Array<Disciplina>, listaCursos: Array<Curso>) {
        if (listaCursos){
            this.consultarCursos(listaCursos)
        }

        const id = Number(prompt('Informe o Id do curso a ser atualizado: '))

        const cursoParaAtualizar = this.obterCursoPorId(listaCursos, id)

        if (cursoParaAtualizar){
            const nome= String(prompt('Digite o novo nome do curso: '))

            const turno = String(prompt('Digite o novo turno do curso: '))

            const idsDisciplinas = prompt('IDs das Disciplinas separados por vírgula: ')
            .split(",").map(str => parseInt(str))

            cursoParaAtualizar.nome = nome; 
            cursoParaAtualizar.turno = turno;
            cursoParaAtualizar.disciplinas = idsDisciplinas.map(id => Disciplina.obterDisciplinaPeloId(id, listaDisciplinas)!)

        }


    }

    static obterCursoPorId(lista: Array<Curso>, id: number ){
        const curso = lista.find(curso => curso.id === id)
        return curso
    }

    static obterIndiceDoCursoPorId(lista: Array<Curso>, id: number){
        const curso = this.obterCursoPorId(lista, id)

        const indiceCurso = lista.indexOf(curso!)
        
        return indiceCurso

    }

    static opcoes () {
        console.log('============ Gerenciar Cursos ============')
        console.log('1. Cadastrar Curso')
        console.log('2. Consultar Curso')
        console.log('3. Remover Curso')
        console.log('4. Atualizar Curso')
        console.log('5. Sair')

        return prompt ('Selecione uma opção: ')
    }


 }