export class Disciplina {
    private static counter = 1
    private _id: number
    private _nome: string
    private _cargaHoraria: number

    constructor(nome: string, cargaHoraria: number){
        this._id = Disciplina.counter
        this._nome = nome
        this._cargaHoraria = cargaHoraria
        Disciplina.counter++
    }

    get id(): number {
        return this._id
    }

    get nome(): string {
        return this._nome
    }

    get cargaHoraria(): number {
        return this._cargaHoraria
    }

    set nome(nome: string) {
        this._nome = nome
    }

    set cargaHoraria(cargaHoraria: number) {
        this._cargaHoraria = cargaHoraria
    }

    static obterDisciplinaPeloId(id: number, listaDisciplinas: Array<Disciplina>){
        const disciplinaFiltrada = listaDisciplinas.find((disciplina) => disciplina._id === id);

        if(disciplinaFiltrada === null){
            throw new Error("\nDisciplina não encontrada!\n")
        }

        return disciplinaFiltrada;
    }
    
}