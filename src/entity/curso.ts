import { Disciplina } from "./disciplina"

export class Curso {
    private static counterCurso = 1 
    private _id: number 
    private _nome: string
    private _turno: string
    private _disciplinas: Array<Disciplina>
    //    private _disciplinas: Array<Disciplina>
    
    constructor(nome: string, turno: string, idsDisciplinas: Array<number>, listaDisciplinas: Array<Disciplina>){
    this._id = Curso.counterCurso
    this._nome = nome
    this._turno = turno
    this._disciplinas = idsDisciplinas.map(id => Disciplina.obterDisciplinaPeloId(id, listaDisciplinas)!);
    Curso.counterCurso++
    }
    
    get id(): number {
        return this._id
    }

    get nome(): string {
        return this._nome
    }
    
    get turno(): string {
        return this._turno
    }

    set nome(nome: string) {
        this._nome = nome
    }
    
    set turno(turno: string){
        this._turno = turno
    }

    get disciplinas(): Array<Disciplina>{
        return this._disciplinas;
    }

    set disciplinas(disciplinas: Array<Disciplina>){
        this._disciplinas = disciplinas;
    }

    static obterCursoPeloId(id: number, listaCursos: Array<Curso>){
        const cursoFiltrado = listaCursos.find((curso) => curso.id === id); 

        if (cursoFiltrado === null){
            throw new Error("\nCurso não encontrado!\n")
        }

        return cursoFiltrado; 
    }

}
