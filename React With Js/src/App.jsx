import Card from "./card.jsx";

class StudentInfo{
  constructor(name,age,city){
    this.studentName = name;
    this.age = age;
    this.city = city;
  };
};
const std1 = new StudentInfo("Misam Shaban" , 23 , "Sahiwal");
const std2 = new StudentInfo("Ahmad Shaban" , 18 , "Sahiwal" );

function App() {
  return (
   <>
   <Card/>
   </>
  );
};

export default App;
