function find(arr,a){
    for(let i = 0; i< arr.length; i++){
        if(arr[i]==a){
            console.log(`${a}có trong mảng`);
        }
    }
}
function findIndex(arr,a){
    for(let i = 0;i < arr.length;i++){
        if(arr[i]==a){
            console.log(`${a}nằm tại vị trí ${i}trong mảng`);
        }
    }
}
let arr =[20,30,40];
let a = 30;
find(arr,a);
findIndex(arr,a);