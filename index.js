const BACKGROUND = "BLACK";
const FOREGROUND = "#23eb14ff";

console.log(game)
game.width = 800;
game.height = 800;
const ctx = game.getContext("2d");
console.log(ctx);

function clear(){
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0,0,game.width,game.height);
}

function point({x,y}){
    const s =10;
    ctx.fillStyle = FOREGROUND;
    ctx.fillRect(x-s/2,y-s/2,s,s);
}

function line(p1,p2){
    ctx.strokeStyle = FOREGROUND;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p1.x,p1.y);
    ctx.lineTo(p2.x,p2.y);
    ctx.stroke();
    ctx.fillStyle = FOREGROUND;
}

function screen(p){
    return {
        x : (p.x+1)/2 *game.width,
        y : (1-(p.y+1)/2)*game.height
    }
}

function project({x,y,z}){
    return{
        x : x/z,
        y : y/z
    }
}



function translate_z(v,dz){
    return {x: v.x, y: v.y, z: v.z + dz};
}

function rotate_xz(v,angle){
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    x_1 = c*v.x - s*v.z;
    z_1 = s*v.x + c*v.z;
    return {x: x_1, y: v.y, z: z_1};
}


const FPS = 30;
let dz = 1; 
let angle = 0;


function frame(){
    const dt = 1/FPS;
    //dz += dt;
    angle += Math.PI * dt;
    clear();
    for(const v of vs){
        point(screen(project(translate_z(rotate_xz(v,angle),dz))));
    }

    for(const e of edges){
        for(let i=0;i<e.length;i++){
            const p1 = vs[e[i]];
            const p2 = vs[e[(i+1)%e.length]];
            line(
                screen(project(translate_z(rotate_xz(p1,angle),dz))),
                screen(project(translate_z(rotate_xz(p2,angle),dz)))
            );
        }
    }
    setTimeout(frame,1000/FPS);
}
setTimeout(frame,1000/FPS);