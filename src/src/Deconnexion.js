import React from 'react'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      display: 'flex',
      marginTop: '100px',
    },
}));


const Deconnexion = ({ match, location }) => {
   
  const classes = useStyles();

    return(

      <div className="app">
            <header className="app-header">
              
              <div className={classes.ecriture}>
                  DECONNEXION
              </div>


            </header>  
        </div>  
    );
}




export default Deconnexion
