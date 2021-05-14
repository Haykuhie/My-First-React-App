
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <Link exact to="/">Profile</Link>
            </li>
            <li>
              <Link exact to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        
      
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/github">
            <ProfileGit />
          </Route>
          <Route exact path="/site">
            <Site />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Projects() {
  return  <div className='secondSection'>
           <p className='hr'>Flint<br />
              <span className='small'> A deep learning framework <br /> implemented in Numpy...</span>
           </p>
           <p className='hr'>Metallic<br />
              <span className='small'> A meta-learning library <br /> base on PyTorch...</span>
           </p>
           <p className='hr'>Alkaid<br />
              <span className='small'> A reinforcement-learning <br />toolbox for PyTorch...</span>
           </p>
           </div>

}
function Profile() {
  return  <div className='flex'>
  <div className='secondSection'>
       <Link exact to='/'>  <p className='hr'>About Me <br />
              <span className='small'> Hey there! I'm a dragon <br /> lost in human world...</span>
           </p></Link> 
       <Link exact to='/github'>   <p className='hr'>GitHub Stats<br />
              <span className='small'> Here are some status about <br /> my github account...</span>
           </p> </Link> 
         <Link exact to ='/site'>  <p className='hr'>About This Site<br />
              <span className='small'> Something about this <br /> personal portfolio site...</span>
           </p></Link>
           </div>
           <div className='right'>
           <p className='heading1'>About Me</p>
           <p className='heading1'>Biography</p>
           <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde dolorum molestias illum est. Vero fugiat recusandae cum doloremque eum perferendis officiis, illo temporibus. Inventore deserunt ducimus dolores similique, <a href="https://www.harvard.edu/">University</a> iste perferendis et minima quibusdam debitis voluptas quo. Deserunt, a! Cum.
           </div>
           </div>
  </div>         
}
function ProfileGit() {
  return  <div className='flex'>
  <div className='secondSection'>
         <Link exact to='/'>  <p className='hr'>About Me <br />
              <span className='small'> Hey there! I'm a dragon <br /> lost in human world...</span>
           </p></Link> 
         <Link exact to='/github'>   <p className='hr'>GitHub Stats<br />
              <span className='small'> Here are some status about <br /> my github account...</span>
           </p> </Link> 
         <Link exact to ='/site'>  <p className='hr'>About This Site<br />
              <span className='small'> Something about this <br /> personal portfolio site...</span>
           </p></Link>
           </div>
           <div className='right'>
           <p className='heading1'>Github stats</p>
           <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde dolorum molestias illum est. Vero fugiat recusandae cum doloremque eum perferendis officiis, illo temporibus. Inventore deserunt ducimus dolores similique,iste perferendis et minima quibusdam debitis voluptas quo. Deserunt, a! Cum.
           </div>
           </div>
  </div>         
}
function Site() {
  return  <div className='flex'>
  <div className='secondSection'>
         <Link exact to='/'>  <p className='hr'>About Me <br />
              <span className='small'> Hey there! I'm a dragon <br /> lost in human world...</span>
           </p></Link> 
         <Link exact to='/github'>   <p className='hr'>GitHub Stats<br />
              <span className='small'> Here are some status about <br /> my github account...</span>
           </p> </Link> 
         <Link exact to ='/site'>  <p className='hr'>About This Site<br />
              <span className='small'> Something about this <br /> personal portfolio site...</span>
           </p></Link>
           </div>
           <div className='right'>
           <p className='heading1'>About This Site</p>
           <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde dolorum molestias illum est. Vero fugiat recusandae cum doloremque eum perferendis officiis, illo temporibus. Inventore deserunt ducimus dolores similique,iste perferendis et minima quibusdam debitis voluptas quo. Deserunt, a! Cum.
           </div>
           </div>
  </div>         
}
