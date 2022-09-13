// 1 == SUCIO
// 0 == LIMPIO

class IntalligentAgen {
    env : number[] = [];

    getAction() {
        let cont = 0;

        for(let pos in this.env){
            console.log("Position: " + pos)
            cont++

            if(this.env[pos] === 0){
                console.log("Env: " + this.env)
                console.log('This space is clean')
            }

            if(this.env[pos] === 1){
                console.log("Env: " + this.env)
                console.log("Space not clean, cleaning")
                this.env[pos] = 0
                console.log("Space clean!")
            }

            if(cont < this.env.length){
                console.log("Moving right...")
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
agente.getEnviroment([0,1,0,1,0,0,1])
