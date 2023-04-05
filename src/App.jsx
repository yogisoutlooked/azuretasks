import Task from "./Task";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


function App() {
  return (
    <div className="mt-0 max-w-lg font-poppins">
      <Navbar />
      <Task />
      <Task />
      <Footer/>
    </div>
  );
}

export default App;
