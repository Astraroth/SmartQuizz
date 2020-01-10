import React  from 'react'
import { Button } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MenuItem from '@material-ui/core/MenuItem';

import Menu from '@material-ui/core/Menu';


import logo from './logo.png';
import avatar from './avatar.png';

//import './Toolbar.css'
import './App.css'
import HomeQuizz from './Home'
import StatsQuizz from './Stats'
import EnCoursQuizz from './En cours'
import ProfilQuizz from './Profil'
import Deconnexion from './Deconnexion'
import CreationQuizz from './Creation'
import Classe31Quizz from './ClassesDossier/31'
import Classe32Quizz from './ClassesDossier/32'
import Classe33Quizz from './ClassesDossier/33'
import Classe34Quizz from './ClassesDossier/34'
import CreaQuizz from './CreaQuizz';
import ClassesQuizz from './Classes'





const useStyles = makeStyles(theme => ({  

  toolbar:{
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)' //gris clair
    background: 'linear-gradient(45deg, #282c34 30%, #2F4F4F 90%)'
  },
 
  profil: { //bouton profil
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    padding: '0 50px',

    position: 'absolute',
    top: 5, left: 1320, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rouge
    }
  },


  home: { //bouton home
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 10,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width : 150,
    padding: '0 50px',

    position: 'absolute',
    top: 5, left: 150, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },

  

  stats: { //bouton onglet
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 10,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width : 150,
    padding: '0 50px',

    position: 'absolute',
    top: 5, left: 320, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },


  bencours: { //bouton encours
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 10,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width : 150,
    padding: '0 50px',

    position: 'absolute',
    top: 5, left: 490, right: 0, bottom: 0,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },


}));


const ToolbarQuizz = ({ match, location }) => {
   
  const classes = useStyles();

   //menu deroulant
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(

    <Router>
      <div className="app">
        <header className="app-header">              
          <AppBar className={classes.toolbar} position="static" >                
            <Toolbar>

              <img src={logo} 
                   style={{width: 110, height: 60, marginTop: 10}} 
                   alt="Logo"/>

              <Link to="/">
                <Button className={classes.home} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary"> 
                  <p>Home</p>
                </Button> 
              </Link>


              <Link to="/Stats">
                <Button className={classes.stats} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary">
                    <p>Mes stats</p>
                </Button>  
              </Link>

            
              <Link to="/EnCours">
                  <Button className={classes.bencours}
                          variant="contained" 
                          color="primary">
                    <p>En cours</p>
                  </Button>
              </Link>

                
                {/*menu deroulant profil + deconnexion*/}
               <Button className={classes.profil} 
                      onClick={handleClick}>
                  Profil
              </Button>
              <Menu id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
              >
                <Link to="/Profil">
                  <MenuItem onClick={handleClose}>Mon Profil</MenuItem>
                </Link>

                <Link to="/Deconnexion">
                  <MenuItem onClick={handleClose}>Déconnexion</MenuItem>
                </Link>
              </Menu>

            </Toolbar>
          </AppBar>


            
            <Route  exact path="/" component={HomeQuizz}/>

          
             
            <Route  path="/Stats" component={StatsQuizz}/>
              
            <Route  path="/EnCours" component={()=> <EnCoursQuizz online = {true}/>} />
            
            <Route  path="/Rejoindre" component={CreationQuizz}/>

            <Route  path="/Profil" component={ProfilQuizz}/>

            <Route  path="/Deconnexion" component={Deconnexion}/>

            <Route  path="/Creation" component={CreationQuizz}/>


            <Route  path="/robert" component={CreaQuizz}/>            

            {/*<Route   path="/Classes/:numero" component={()=> <ClassesQuizz numero = "32"/>}/> */}

            <Route  exact path="/Classes/31" component={Classe31Quizz}/>

            <Route  exact path="/Classes/32" component={Classe32Quizz}/>

            <Route  exact path="/Classes/33" component={Classe33Quizz}/>

            <Route  exact path="/Classes/34" component={Classe34Quizz}/>
      

        </header>  
      </div>  
    </Router>
  );
}


export default ToolbarQuizz
