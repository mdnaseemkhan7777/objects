//TASK 1

// var itemArray =[
//     {
//         name:"juice",
//         price:"50",
//         quantity:"3",
//     },
//     {
//         name:"cookie",
//         price:"30",
//         quantity:"9",
//     },
//     {
//         name:"shirt",
//         price:"880",
//         quantity:"1",
//     },
//     {
//         name:"pen",
//         price:"100",
//         quantity:"2",
//     },
// ]
// var item1 = (itemArray[0].price*itemArray[0].quantity);
// var item2 = (itemArray[1].price*itemArray[1].quantity);
// var item3 = (itemArray[2].price*itemArray[2].quantity);
// var item4 = (itemArray[3].price*itemArray[3].quantity);

// var allItem =(item1+item2+item3+item4);
// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(item4);
// console.log(allItem);


 //TASK 2
// var bioData ={
//     name:"Naseem khan",
//     email:"mdnaseemkhan7777@gmail.com",
//     password:"123456",
//     age:"23",
//     gender:"male",
//     city:"karachi",
//     country:"pakistan"
// }
// if("age" in bioData && "country" in bioData){
//     console.log("age and country found")
// }else{
//     console.log("not found")
// }



//TASK 3

// function Student(first,last,city,age){
//     this.firstName = first;
//     this.lastName = last;
//     this.city = city;
//     this.age = age; 
// }
// var bio = new Student("Amir","khan","karachi",35)
// var bio1 = new Student("Atif","aslam","multan",30)
// var bio2 = new Student("salman","khan","islamabad",40)
// var bio3 = new Student("Adnan","khan","peshawer",20)
// console.log(bio.city);
// console.log(bio1.city);
// console.log(bio2.city);
// console.log(bio3.city);


// task 4


// function CheckPopulation(name, gender, address, education, profession) {
//   this.name = name;
//   this.gender = gender;
//   this.address = address;
//   this.education = education;
//   this.profession = profession;
// }

// const Peoples = new CheckPopulation(
//   "Naseem khan",
//   "Male",
//   "orangi town ",
//   "bs cs",
//   "we developer"
// );
//console.log(Peoples);

//save vales of education
// function educationData() {
//     var select = document.getElementById("education");
//     if (localStorage === "") {
//       select[localStorage.getItem("save")].selected = true;
//     } else if (select.value === "cs") {
//       localStorage.setItem("save", select.value);
//     } else if (select.value === "acf") {
//       localStorage.setItem("save", select.value);
//     } else if (select.value === "bba") {
//       localStorage.setItem("save", select.value);
//     } else if (select.value === "ms") {
//       localStorage.setItem("save", select.value);
//     }
//   }
  
  //save values for profession
//   function professionPeoples() {
//     var profession = document.getElementById("profession");
//     if (localStorage === "") {
//       profession[localStorage.getItem("save")];
//     } else if (profession.value === "Web developer") {
//       localStorage.setItem("profession", profession.value);
//     } else if (profession.value === "React Native") {
//       localStorage.setItem("profession", profession.value);
//     } else if (profession.value === "Flutter Developer") {
//       localStorage.setItem("profession", profession.value);
//     } else if (profession.value === "ios developer") {
//       localStorage.setItem("profession", profession.value);
//     }
//   }
  
//   //save values of radio buttons
  
//   var radio = document.getElementsByName("gender");
//   for (var i = 0; i < radio.length; i++) {
//     if (radio[i].checked) {
//       localStorage.getItem("gender");
//     }
//   }