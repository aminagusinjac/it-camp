
//napraviti program koji ce tri puta korisnika da uzme tri broja i da pomnozi jedan puta drugi [uta  treci] i taj zbir  se prikaze u alert 
//napravi se petlja i kolko brojeva s/e unese toliko puta da se okrene .

for(let i =0,i<3,i++){

const broj = prompt ("Unesi brojeve");

function pomnozi( broj){

   const proizvod= broj*broj*broj;
  return proizvod;
 }
 console.log(pomnozi(broj));
}