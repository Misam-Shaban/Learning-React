
function Card() {
        const name = "Misam";
const age = 24;
const isStudent = true;
const nothing = null;
const names = ["Misam", "Ahmad", "Ali"];


  return (
   <>
    <div className="bg-blue-200">
        {/* <h1 className="bg-blue-200  border">Card..</h1>
       <div>
        hello
       </div> */}
       <h1>{name}</h1>
<p>{age}</p>
<p>{isStudent}</p>
<p>{nothing}</p>
 <p>{names}</p>
 <h1>{"Misam"}</h1>
 
    </div>
    </>
  );
};

export default Card;
