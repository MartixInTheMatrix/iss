import axios from "axios";
export class Schema {
    width: number;
    height: number;
    reduction: number;
    x: any;
    y: any;
    
    constructor(width: number, height: number, reduction: number){
        this.width = width;
        this.height = height;
        this.reduction = reduction;
        this.x = undefined;
        this.y = undefined;
    }

    getLocation = async ()=>{
        axios.get('http://api.open-notify.org/iss-now.json').then(res =>{
            console.log(res.data)
            this.x = (res.data.iss_position.latitude * this.reduction).toFixed(0)
            this.y = (res.data.iss_position.longitude * this.reduction).toFixed(0)
        })
    }

    build(){
        let builder = []
        for(let i= this.height / 2 - this.height -1; i < this.height / 2; i++){
            let bool = i == this.y? true : false
            let earth = i == 0? true : false
            let str = ''

            for(let i= this.width / 2 - this.width; i < this.width / 2; i++){
                bool && this.x == i? str += '@' : earth && i == 0? str += 'E' : str += '.'
            }
            builder.push(str)
        }
        return builder.join("\n")
    }
}