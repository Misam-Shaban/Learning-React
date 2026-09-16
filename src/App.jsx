// import ArrowFuucWithThis from "./ArrowFunc.jsx";
// import First from "./Components/first.jsx";
import Card from "./Card.jsx";
import Chlidrenprops from "./Components/Chlidrenprops.jsx";
// import Newcard from "./Components/Newcard.jsx";
// import Extands from "./src./extands.jsx";
// import Destructring from "../destructring.jsx";
// import Map from "./map.jsx";
// import Spreed from "../spreed.jsx";

function App() {
  return (
   <>
   {/* <Card/> */}
   {/* <Extands/> */}
   {/* <ArrowFuucWithThis/> */}
   {/* <Map/> */}
   {/* <Destructring/> */}
   {/* <Spreed/> */}
   {/* <First/> */}
   {/* <Newcard studentName="Misam Shaban" course="React Js" age={24} city="Lahore" aboutLeaning="Currently building projects with React JS" />
   <Newcard studentName="Ahmad Sha
   ban" course="JavaScript" age={18} city="Sahiwal" aboutLeaning="Currently Learning basics of JS"  /> */}
   <Chlidrenprops>
    <h1>what is your Name</h1>
    <h2>My Name is Misam Shaban..</h2>
    <Card/>
   </Chlidrenprops>
   </>
  );
};

export default App;
