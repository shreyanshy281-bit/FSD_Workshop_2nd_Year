let student={
    name:"Shreyansh",
    age:19,
    city:"Delhi"
};

//for
for(let key in student){
    console.log(key+":"+student[key]);
}

let f=["apple","banana","mango"]
for(const fruit of f){
    console.log(fruit);
}