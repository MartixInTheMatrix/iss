import { Schema } from './schema';
let window = new Schema(100, 26, 0.1);

window.getLocation()
setTimeout(()=>{
    console.log(window.x)
    console.log(window.y)
    console.log(window.build());
}, 2000)
