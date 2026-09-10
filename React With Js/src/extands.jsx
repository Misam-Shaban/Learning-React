//Normal class of Student Data

class StudentInfo{
  constructor(name,age,city){
    this.studentName = name;
    this.age = age;
    this.city = city;
  };

  
};
const std1 = new StudentInfo("Misam Shaban" , 23 , "Sahiwal");
const std2 = new StudentInfo("Ahmad Shaban" , 18 , "Sahiwal" );

function Extands() {
  return (
    <>
     <div className=" border-2 rounded-2xl m-10 p-5 bg-blue-200 text-gray-600 font">
        {/* Student 1 Data */}
        <h1 className="font-bold">Student 1 Data...</h1>
      <h2>{std1.studentName}</h2>
      <p>Age: {std1.age}</p>
      <p>City: {std1.city}</p>
      {/* Student 2 Data */}
      <br />
      <h1 className="font-bold" >Student 2 Data...</h1>
      <h2>{std2.studentName}</h2>
      <p>Age: {std2.age}</p>
      <p>City: {std2.city}</p>
    </div>
    </>
  )
}

export default Extands
