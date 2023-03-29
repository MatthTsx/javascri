export class Math_{
    static instace: any

    constructor(){
        if(Math_.instace){
            return Math_.instace
        }
        Math_.instace = this
    }


    getBigger2(values: number[]){
        let bigger = values[0] || 0
        values.forEach((value) => {
            if(value > bigger){
                bigger = value
            }
        })
        return bigger
    }

    getAge3(age: number){
        if(age < 18) return "menor de idade"
        if(age > 65) return "maior de 65"
        return "maior de idade"
    }

    getTypeNumber4(value : number){
        if(value == 0) return "nulo"
        if(value < 0) return "negativo"
        return "positivo"
    }

    getTabuada5(value: number){
        const values: Array<number> = [];
        [...Array(10)].forEach((a,i) => {
            values.push(value * (i + 1))
        })
        return values
    }

    getAverage6(values: number[]){
        let avg = 0
        values.forEach((v) => {
            avg += v
        })
        return avg / values.length
    }
}