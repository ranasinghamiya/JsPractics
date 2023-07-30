//console.log('START');

const person={
    name: 'John',
    getName: function(){
        return this.name;
    },
    getRollNo:function(){
        return this.rollNo;
    }
}
const student={
    rollNo: 1,
   __proto__:person
}
const primaryStudent={
    rollNo: 2,
    __proto__:student
}
const chars=['A']
console.log(chars);

console.log(person);
console.log(student);//{rollNo:1}
console.log(student.getName());//john
console.log(student.getRollNo());//1
console.log(primaryStudent.getRollNo());//2

const p1=new Object();//const p1={}
const a1=new Array();//const a1=[];
const f1=new Function();

console.log(p1);//{}

console.log(a1);//[]

console.log(f1);//

console.log(Object.prototype);
console.log(Array.prototype);
console.log(Function.prototype);


Array.prototype.show=function(){
    console.log(this);
}
const cities=['delhi'];
cities.show();//['delhi']

Array.prototype.convertToObject=function(){
    let obj={}
    this.forEach(elem=>{
        obj[elem]=elem
    })
    return obj;
    
}
const cities1=['delhi'];
console.log(cities1.convertToObject());


function MyProto(name){
    this.name=name;
    MyProto.prototype=person;//__proto__:person
}
 const p2=new MyProto('Jack')
 console.log(p2);//MyProto {name: 'Jack'}
console.log(p2.getName());