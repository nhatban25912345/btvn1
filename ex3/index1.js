// let array= [1,1,2,3,4,4,5];
var string = prompt("Enter a squence of Number, separated by commas(,) :");

console.log(string);
let array = string.split(",");
console.log(array);

// for (let i=0; i < array.length-1; i++){
//     let s = true;
//     for (let j=1; j < array.length; j++){
//         if ( array[i] == array[j] ) {
//             array.splice(j,1);
//             // myFunction(i);
//             s = false;
//         }
//     }
//     ìf (s == false ){
//         array.splice(i,1);
//     }
// }
let i=0;
let j;
let s ;
while (i < array.length-1) {
    s = true;
    j=i+1;
    while(j < array.length){
        if ( array[i] == array[j] ){
        array.splice(j,1);
        s = false;
        } else {
            j++;
        }
    }
    if (s == false) {
        array.splice(i,1)
    } else {
        i++;
    }
}

console.log(array);

