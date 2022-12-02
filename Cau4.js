// class Staff{
//     constructor(fullname,email){
//         this.fullname = fullname;
//         this.email = email;
//     // }
    // setFullname(fullname){
    //     this.fullname = fullname;
    // }
    // getFullname(){
    //     return this.fullname;
    // }
    // setEmail(email){
    //     this.email = email;
    // }
    // getEmail(){
    //     return this.email;
//     // }
// }
// let Staffs =[
//     new Staff("David","david.do@gmail.com")
// ]
// function setFullname("David Do"){
//     this.fullname = fullname;
// }
const Staff = {fullname:"David",
                email:"david@gmail.com"
};
function setFullname(value, a){
  a.fullname = value;
}
function getFullname(a){
  return a.fullname;
}
function setEmail(valueEmail, a){
  a.email = valueEmail;
}
function getEmail(a){
  return a.email;
}
function toString(){
  return this.fullname;

}
let Staffs=[
    Staff,
    new Staff("Nguyễn văn A","nguyenvana@gmail.com"),
    new Staff("Nguyễn văn B","nguyenvanb@gmail.,com")
]
setFullname("David Do", Staff);
getFullname(Staff);
setEmail("david.do@gmail.com", Staff);
toString(Staff);
console.log(Staff)
