import { Schema } from './schema';
let window = new Schema(100, 26, 0.1);

window.getLocation().then(()=>{
    console.log(window.x)
    console.log(window.y)
    window.theme('.')
    console.log(window.build());
});


