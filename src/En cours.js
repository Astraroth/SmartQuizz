import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      display: 'flex',
      marginTop: '100px',
    },

  toolbar:{
  //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',    //background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)' //gris clair
  background: 'linear-gradient(45deg, #282c34 30%, #2F4F4F 90%)'
  },


  rejoindre: { //bouton rejoindre
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //background: 'linear-gradient(45deg, #696969 30%, #C0C0C0 90%)',
    border: 50,
    borderRadius: 70,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    
    position: 'absolute',
    top: 200, left: 1250, right: 0, bottom: 0,
    

    fontWeight: 'bold',
    height: 80,
    width: 220,
    padding: '0 50px',
    //margin: 100,
    marginLeft: -600,//theme.spacing(10),
    marginTop: 40,
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.1)",
      //transform: "rotate(180deg)",
      //background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)', //gris clair
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', //rougeclair
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },
}));



const EnCoursQuizz = ({ match, location, online }) => {
   
  const classes = useStyles();

    return(

      <div className="app">
            <header className="app-header">
              
              <div className={classes.ecriture}>
                  {online ? <p>QUIZZ EN COURS...</p> : <p>PAS DE QUIZZ EN COURS</p> }

              </div>

              {online&& 
                <Link to="/Rejoindre">
                  <Button className={classes.rejoindre} 
                          shape="chubby" 
                          variant="contained" 
                          color="primary"> 
                    <p>Rejoindre</p>
                  </Button> 
                </Link>
              }

            </header>  
        </div>  
    );
}




EnCoursQuizz.propTypes = {
  /*online: PropTypes.oneOf([
      'true',
      'false',
    ]).isRequired,*/

    online: PropTypes.bool.isRequired,
}




export default EnCoursQuizz
