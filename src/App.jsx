import Task from "./Task";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Booking from "./Booking";


function App() {
  return (
    <div className="mt-0 max-w-lg font-poppins ">
      <Navbar />
      <Booking />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Footer/>
    </div>
  );
}

export default App;
