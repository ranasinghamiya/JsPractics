console.log('START');
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("1");
       // reject(1)
    },1000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("2");
       // reject(1)
    },1000)
})
p1.then((data)=>{
    console.log('then1',data);//then1 1
    return p2;
},(err)=>console.log('catch',err))
//promise chaining
.then((data)=>{
    console.log('then2',data);//then2 undefined

})
.catch((err)=>console.log('err',err));
console.log('END');