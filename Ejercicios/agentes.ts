// 1 == SUCIO
// 0 == LIMPIO

class IntalligentAgen {
    direction: string
    env : number[] = [];

    getAction() {
        for(let x in this.env){
            console.log("Position: " + x)

            if(this.env[x] === 0){
                console.log(this.env)
                console.log('This space is clean, Moving right')
                console.log("Next...")
            }

            if(this.env[x] === 1){
                console.log(this.env)
                console.log("Space not clean, cleaning")
                this.env[x] = 0
                console.log("Next...")
            }
        }
        console.log("Final result: " + this.env)
    }

    getEnviroment(value: any) {
        this.env = value;
        this.getAction()
    }
}

let agente = new IntalligentAgen()
agente.getEnviroment([0,1,0,1])
