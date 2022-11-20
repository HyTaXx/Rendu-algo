/*

let a = 4
let b = 4
let c = 3

if (a==b){
    console.log("c'est égal")
}

if (c<b && a+c !=3){
    console.log("ok")
} else {
    console.log("raté")
}

*/

/*

let a = 4
let b = 4
let c = 3

switch(a){
    case b:
        console.log('égal à b');
        break;
    case c:
        console.log('égal à c');
        break;
    default:
        console.log('égal à rien');
}

*/

/*

for(let a = 55 ; a>=0 ; a--){
    console.log('oklm')
}

*/

/*
let a = 3
while(a<9){
    a++
    if(a==8){
        break
    }
    if(a==7){
        continue
    }
    console.log(a)
}
console.log('boucle cassé au bout de '+a+' tours')
*/


/*
let a = "Jean"
let b = "Paul"
let result = verif(a,b)
function verif(p1,p2){
    return p1==p2
}
console.log(result)
*/

/*
let array = ['NicoDg','PierrC']

array.push("AlexiS")

array.forEach(e=>{console.log(e)});
*/

/*
let array = []

array.push('Vincent')
array.push('Paul')
array.push('Arthur')

array.forEach(e=>{console.log(e+' va à la pêche')})

for(i=0 ; i<array.length ; i++){
    array[i]+=' va à la pêche'
}
console.log(array)
*/

/*
class Guerrier{
    constructor(attack,defense){
        this.attack = attack
        this.defense = defense
    }

    getAttack(){
        console.log(this.attack);
    }
}

let AlexiS = new Guerrier(10,5);
AlexiS.getAttack();
*/


class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }

    isLucky(){
        return Math.random()<this.luck
    }

    attackPokemon(Poke){
        if(this.isLucky()){
            let degats = this.attack - Poke.defense
            Poke.hp-=degats
            console.log(Poke.name+' A subi '+ degats +' dégats , il lui reste '+ Poke.hp +' hp')
        } else {
            console.log(Poke.name+' a Miss')
        }
    }
}
let Pika = new Pokemon('Pikachu',50,20,100,0.70);
let Sala = new Pokemon('Dracaufeu',30,20,100,0.60);
let Cara = new Pokemon('Carapute',60,20,100,0.70);
let Beta = new Pokemon('Betameche',40,20,250,0.60);
let Jose = new Pokemon('José',20,10,100,0.70);
let Bulb = new Pokemon('Bulbizard',30,20,100,0.60);

let listePoke=[]

listePoke.push(Pika,Sala,Cara,Beta,Jose,Bulb)
let i = 0
while (listePoke.length!=0){
    let randomPoke = new Pokemon('randomPoke',Math.floor(Math.random()*100+50),10,Math.floor(Math.random()*100+100),Math.random())
    while(listePoke[0].hp>0 && randomPoke.hp>0) {
        console.log(listePoke[0].name+' Joue')

        listePoke[0].attackPokemon(randomPoke)
        if(randomPoke.hp<=0){
            console.log(randomPoke.name+' est mort')
            i+=1
        }

        console.log(randomPoke.name+' Joue')
        randomPoke.attackPokemon(listePoke[0])
        if(listePoke[0].hp<=0){
            console.log(listePoke[0].name+' est mort')
            if(listePoke.length>1){
                listePoke.shift()  
            } else {
                console.log('Vous n\'avez plus de pokemons , vous avez battus '+i+' pokemons')
                break
            }       
        }
    }
}
/*
while(Pika.hp>0 && Sala.hp>0) {
    console.log('--')
    Pika.attackPokemon(Sala)
    if(Sala.hp<=0){
        console.log(Sala.name+' est mort')
        break
    }
    console.log('--')
    Sala.attackPokemon(Pika)
    if(Pika.hp<=0){
        console.log(Pika.name+' est mort')
        break
    }

}
*/