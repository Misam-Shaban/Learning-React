



function Event() {

    function handleClick(misam){
    console.log(misam);
    // alert("Button")
}

// function studentName(name){
//     console.log(name);
    
// }

return(
    <button onClick={handleClick} >Click Me</button>
    // <button onClick={()=> studentName("Misam Shaban") }>student Name</button>
);

}

export default Event;
