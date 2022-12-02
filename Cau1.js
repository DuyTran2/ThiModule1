function quadraticequation2(a,b,c) {
  
    let x1,x2;
    let delta = (b*b - 4*a*c);
    if(delta==0){
        x1 = -b/(2*c);
        x2 = -b/(2*c);
        console.log("Equation with double solution:"+x1,x2);
    }else if(delta < 0){
        console.log("The equation has no solution");
    }else{
        x1 = (-b - Math.sqrt(delta))/(2*a);
        x2 = (-b + Math.sqrt(delta))/(2*a);
        console.log("The equation has two solutions:"+x1,x2);
    }
}

quadraticequation2(8,12,-20);