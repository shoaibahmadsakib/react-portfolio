import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/Subsection/NavBar";
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom'
import AboutPage from "./Components/Pages/AboutPage";
import ProjectPage from "./Components/Pages/ProjectPage";
import Resume from "./Components/Pages/Resume";
function App() {
  return (
    <Router>

   
    <div className="App_class">
      <div className="container">
        <div className="row fixed__bottom">
          <div className="col-lg-3">
            <div className="sidebar_style">
              <Sidebar />
            </div>
          </div>
          <div className="col-lg-9 main_style">
             <NavBar/>
             <Route exact path="/">
               <Resume/>
             </Route>
             <Route exact path="/about">
               <AboutPage/>
             </Route>
             <Route exact path="/project">
               <ProjectPage/>
             </Route>
             <Redirect to="/"/>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}
export default App;
