import { Curso } from "./curso"

export class Aluno {
    private static counterAluno = 1
    private _id: number
    private _nome: string
    private _idade: number
    private _curso: Curso
    // como adicionar o curso? 
    // e as disciplinas matriculado? 

    constructor(nome: string, idade: number, idCurso: number, listaCursos: Array<Curso>){
        this._id = Aluno.counterAluno
        this._nome = nome
        this._idade = idade
        this._curso =  Curso.obterCursoPeloId(idCurso, listaCursos)!

        Aluno.counterAluno++
    }

    get id(): number {
        return this._id
    }

    get nome(): string {
        return this._nome
    }

    get idade(): number {
        return this._idade
    }

    set nome(nome: string) {
        this._nome = nome
    }

    set idade(idade: number) {
        this._idade = idade
    }

    get curso(): Curso {
        return this._curso
    }
    
    set curso(curso: Curso){
        this._curso = curso
    }
}
