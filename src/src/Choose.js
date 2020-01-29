import React, { Component} from 'react'
import './App.css'
import { Button } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles'                     //NEW FIRST PAGE (CHOOSE PROF OR STUDENT)
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import HomeProf from './HomeProf'
import ToolbarQuizz from './Toolbar'
import CreaQuizz from './CreaQuizz'
import Login from './Login'

  const useStyles = makeStyles(theme => ({  
 
    homeprof: { //bouton homeprof
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 50,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      fontWeight: 'bold',
      height: 60,
      width : 1000,
      padding: '0 50px',
  
      position: 'absolute',
      top: 200, left: 270, /*right: 0, bottom: 0,*/
  
      transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
      "&:hover": {
        transform: "scale(1.1)",
        background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rouge
      }
    },
  
    homeeleve: { //bouton homeeleve
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 50,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      fontWeight: 'bold',
      height: 60,
      width : 1000,
      padding: '0 50px',
  
      position: 'absolute',
      top: 400, left: 270,  /*right: 0, bottom: 0,*/
  
      transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
      "&:hover": {
        transform: "scale(1.1)",
        background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rouge
      }
    },
  
    }));


  function Home() {
    const home = useStyles();
    return (
      <div className="app-header">
        
        <Link to="/professeur">
          <Button className={home.homeprof}
                  shape="chubby" 
                  variant="contained" 
                  color="primary">
              <p>PROFESSEUR</p>
          </Button>  
        </Link>
        <Link to="/eleve">
          <Button className={home.homeeleve}
                  shape="chubby" 
                  variant="contained" 
                  color="primary">
              <p>ÉLÈVE</p>
            </Button>
        </Link>
        
      </div>
    );
  }

function Choose()
{
  
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/professeur">
            <Login/>
          </Route>
          <Route path="/eleve">
            <HomeProf/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default Choose;