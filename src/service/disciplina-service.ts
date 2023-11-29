import { App } from "@modules/app";
import { Disciplina } from "../entity/disciplina";
import promptSync from 'prompt-sync';

const prompt = promptSync()

export class DisciplinaService {

    static gerenciarDisciplinas(listaDisciplinas: Array<Disciplina>) {
        
        while (true) {
            const opcao = this.opcoes()
            
            switch (opcao) {
                case '1':
                    this.cadastrarDisciplina(listaDisciplinas)
                    break;

                case '2':
                    this.consultarDisciplinas(listaDisciplinas)
                    break;
                case '3':
                    this.removerDisciplina(listaDisciplinas)
                    break;
                case '4':
                    this.atualizarDisciplina(listaDisciplinas)
                    break;
                case '5':
                    App.execute()
                    break;
            }

        }
    }
    
    static cadastrarDisciplina(listaDisciplinas: Array<Disciplina>) {
        console.log('========= Cadastrar Disciplina =========')
        const nome = String(prompt('Nome da disciplina: '))
        const cargaHoraria = Number(prompt('Carga horária da disciplina: '))

        const novaDisciplina = new Disciplina(nome, cargaHoraria)

        return listaDisciplinas.push(novaDisciplina)
    }

    static consultarDisciplinas(lista: Array<Disciplina>) {

        if(lista){
            console.log('\n========= Lista de Disciplinas =========')
            lista.forEach((disciplina) => {
                console.log(`ID: ${disciplina.id}`)
                console.log(`Nome: ${disciplina.nome}`)
                console.log(`Carga Horária: ${disciplina.cargaHoraria}`)
                console.log('\n')
            }) 
        }
    }

    static removerDisciplina(lista: Array<Disciplina>) {
        
        if(lista){
            this.consultarDisciplinas(lista)
        }

        const id  = Number(prompt('Informe o ID da disciplina a ser removida: '))

        const indiceDisciplinaParaDeletar = this.obterIndiceDaDisciplinaPorId(lista, id)

        lista.splice(indiceDisciplinaParaDeletar, 1)
        console.log(`A disciplina ${id} foi removida com sucesso!`)       
        
    }
    
    
    static atualizarDisciplina(lista: Array<Disciplina>) {
        if(lista){
            this.consultarDisciplinas(lista)
        }

        const id  = Number(prompt('Informe o ID da disciplina a ser atualizada: '))

        const disciplinaParaAtualizar = this.obterDisciplinaPorId(lista, id)

        if(disciplinaParaAtualizar){
            const nome = String(prompt('Digite o novo nome da disciplina: '))
            const cargaHoraria = Number(prompt('Digite a nova carga horária da disciplina: '))
        
            disciplinaParaAtualizar.nome = nome;
            disciplinaParaAtualizar.cargaHoraria = cargaHoraria;
        }

    }

    static obterDisciplinaPorId(lista: Array<Disciplina>, id: number){
        const disciplina = lista.find(disciplina => disciplina.id === id)
        return disciplina
    }

    static obterIndiceDaDisciplinaPorId(lista: Array<Disciplina>, id: number){
        const disciplina = this.obterDisciplinaPorId(lista, id)

        const indiceDisciplina = lista.indexOf(disciplina!)

        return indiceDisciplina

    }

    static opcoes() {
        console.log('========= Gerenciar Disciplinas =========')
        console.log('1. Cadastrar Disciplina')
        console.log('2. Consultar Disciplina')
        console.log('3. Remover Disciplina')
        console.log('4. Atualizar Disciplina')
        console.log('5. Sair')

        return prompt('Seleciona uma opção: ')
    }


}