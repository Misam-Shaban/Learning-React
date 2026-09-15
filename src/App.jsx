// import ArrowFuucWithThis from "./ArrowFunc.jsx";
// import First from "./Components/first.jsx";
import Newcard from "./Components/Newcard.jsx";
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
   <Newcard studentName="Misam Shaban" course="React Js" age={24} city="Lahore" aboutLeaning="Currently building projects with React JS" />
   <Newcard studentName="Ahmad Shaban" course="JavaScript" age={18} city="Sahiwal" aboutLeaning="Currently Learning basics of JS"  />
   </>
  );
};

export default App;
