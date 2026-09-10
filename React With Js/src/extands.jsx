// //Normal class of Student Data

// class StudentInfo {
//   constructor(name, age, city, stdId = "Not Assigned Yet") {
//     // use of Defult value for Student Id
//     this.studentName = name;
//     this.age = age;
//     this.city = city;
//     this.StudentId = stdId;

//     // GET ID METHOD
//   }
//   getId() {
//     return `The Student Id is: ${this.StudentId}`;
//   }
// }

// // Class Inheritance

// class CopyStudentInfo extends StudentInfo {
//   constructor(studentName, age, city, fullAddress) {
//     super(studentName, age, city);
//     this.Studentfulladdress = fullAddress;
//   }

//   stdIdAndFullAddress() {
//     return `${this.getId()} And Address Of the Student: ${this.Studentfulladdress}`;
//   }
// }

// //  stdIdAndFullAddress();

// // New Student Data

// const std1 = new StudentInfo("Misam Shaban", 23, "Sahiwal", "BC210410014");
// const std2 = new StudentInfo("Ahmad Shaban", 18, "Sahiwal");
// const std3 = new StudentInfo("ALi", 24, "Lahore");
// const std4 = new CopyStudentInfo(
//   "Kamran",
//   25,
//   "Lahore",
//   "Cotton Research Station Lahore",
// );
// // StudentInfo.getId()
// function Extands() {
//   return (
//     <>
//       <div className=" border-2 rounded-2xl m-10 m p-5 bg-blue-200 text-gray-600 font">
//         {/* Student 1 Data */}
//         <h1 className="font-bold">Student 1 Data...</h1>
//         <h2>{std1.studentName}</h2>
//         <p>Age: {std1.age}</p>
//         <p>City: {std1.city}</p>
//         <p>ID: {std1.getId()}</p>
//         {/* Student 2 Data */}
//         <br />
//         <h1 className="font-bold">Student 2 Data...</h1>
//         <div className="font-medium">
//           <h2>{std2.studentName}</h2>
//           <p>Age: {std2.age}</p>
//           <p>City: {std2.city}</p>
//           <p>ID: {std2.getId()}</p>
//         </div>
//         {/* Student 3 Data */}
//         <br />
//         <h1 className="font-bold">Student 3 Data...</h1>
//         <h2>{std3.studentName}</h2>
//         <p>Age: {std3.age}</p>
//         <p>City: {std3.city}</p>
//         <p>ID: {std3.getId()}</p>
//         <br />
//         <h1 className="font-bold">Inherit Student Data...</h1>
//         <div className="font-medium">
//           <h2>{std4.studentName}</h2>
//           <p>Age: {std4.age}</p>
//           <p>City: {std4.city}</p>
//           <p>ID: {std4.getId()}</p>
//           <p>ID & Address: {std4.stdIdAndFullAddress()}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Extands;





//Normal class of Student Data

class StudentInfo {
  constructor(name, age, city, stdId = "Not Assigned Yet") {
    // use of Defult value for Student Id
    this.studentName = name;
    this.age = age;
    this.city = city;
    this.StudentId = stdId;

    // GET ID METHOD
  }
  getId() {
    return `The Student Id is: ${this.StudentId}`;
  }
}

// Class Inheritance

class CopyStudentInfo extends StudentInfo {
  constructor(studentName, age, city, stdId, fullAddress) {
    super(studentName, age, city,stdId);
    this.Studentfulladdress = fullAddress;
  }

  stdIdAndFullAddress() {
    return `${this.getId()} And Address Of the Student: ${this.Studentfulladdress}`;
  }
}

//  stdIdAndFullAddress();

// New Student Data

const std1 = new StudentInfo("Misam Shaban", 23, "Sahiwal", "BC210410014");
const std2 = new StudentInfo("Ahmad Shaban", 18, "Sahiwal");
const std3 = new StudentInfo("ALi", 24, "Lahore");
const std4 = new CopyStudentInfo(
  "Kamran",
  25,
  "Lahore",
  "BC2104178977",
  "Cotton Research Station Lahore",
);

// Array of normal students for mapping
const students = [std1, std2, std3];

function Extands() {
  return (
    <>
      <div className=" border-2 rounded-2xl m-10 p-5 bg-blue-200 text-gray-600 font">
        {/* Normal Students Data (rendered via map) */}
        {students.map((std, index) => (
          <div key={index} className="font-medium">
            <h1 className="font-bold">Student {index + 1} Data...</h1>
            <h2>{std.studentName}</h2>
            <p>Age: {std.age}</p>
            <p>City: {std.city}</p>
            <p>ID: {std.getId()}</p>
            <br />
          </div>
        ))}

        {/* Inherit Student Data */}
        <h1 className="font-bold">Inherit Student Data...</h1>
        <div className="font-medium">
          <h2>{std4.studentName}</h2>
          <p>Age: {std4.age}</p>
          <p>City: {std4.city}</p>
          <p>ID: {std4.getId()}</p>
          <p>ID & Address: {std4.stdIdAndFullAddress()}</p>
        </div>
      </div>
    </>
  );
}

export default Extands;