// |            /\
// |   window    |
// |   document  |
// |   <html>    |
// |   <body>    |
// |   <div>     |
// |   <button>  |
// \/
// capturing      Bubbling
//       Target Phase

//---What is EVENT PROPAGATION----
//The EVENT PROPAGATION mode determines in which order the elements receive the event.

// ------------------------------------bubbling ----------------------------------------------------
//When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

/*const parentCall=()=>{
    alert('Parent Div Call');
    console.log('Parent Div Call');
}
const childCall=()=>{
    alert('Child Div Call');
    console.log('Child Div Call');
}
*/
//--Stop Propagation ----------------------------------------------------

/*const parentCall=()=>{
    alert('Parent Div Call');
    console.log('Parent Div Call');
}
const childCall=(event)=>{
    alert('Child Div Call');
    console.log('Child Div Call');
    event.stopPropagation();
}
*/
//--------Event Capturing ----------------------------------------------------

//  With Event Capturing, the event is first captured by the outermost element and propagated to the inner elements.
// Capturing is also called "trickling", which helps remember the propagation order.

const parentId=document.getElementById('parentId');
const ChildId=document.getElementById('childId');

const parentCall=()=>{
    alert('Parent Div Call');
    console.log('Parent Div Call');
}
const childCall=(event)=>{
    alert('Child Div Call');
    console.log('Child Div Call');
    //event.stopPropagation();
}


parentId.addEventListener('click', parentCall, true);
ChildId.addEventListener('click',childCall,true);





