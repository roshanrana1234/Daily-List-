import React from 'react'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";

import Layout from './component/Layout';


const App = () => {
  return (
    <>
    <Router>
<Layout>


    <Routes>
    <Route  exact path="/" element={ <Notes/>} >
    
    </Route>
    <Route  exact path="/Create" element={ <Create/>} >
      
    </Route>
    </Routes>
    
</Layout>
    </Router>

    </>
  );
};

export default App


// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// // import your route components too

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="teams" element={<Teams />}>
//           <Route path=":teamId" element={<Team />} />
//           <Route path="new" element={<NewTeamForm />} />
//           <Route index element={<LeagueStandings />} />
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );