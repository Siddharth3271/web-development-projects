//break and continue
// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i==5){
//         break
//     }
// }
// for(let i=1;i<=10;i++){
//     if(i===5){
//         continue
//     }
//     console.log(i);
// }

for(let i=1;i<=3;i++){
    for(let j=4;j<=6;j++){
        if(j===5){
            break;
        }
        console.log(i,j);
    }
    console.log(i)
}