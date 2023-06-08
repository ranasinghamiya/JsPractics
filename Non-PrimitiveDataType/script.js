// only Object is non primitive data type
// type of array is object

var arrayExample = [1,2,3,4,5,"Amiya","12324",12345,123.5666,null,undefined,true,1n];
  
  console.log(arrayExample); // (13) [1, 2, 3, 4, 5, 'Amiya', '12324', 12345, 123.5666, null, undefined, true, 1n]
  console.log(typeof arrayExample); // object


  //object
  var dataObj={}
    console.log(typeof dataObj);//object

  dataObj.name="Amiya";//Name is key and Amiya is value

  console.log(dataObj); //{name:'Amiya'}
  console.log(datObj.name); // Amiya
console.log(datObj["name"]); //Amiya