import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      display: 'flex',
      marginTop: '100px',
    },
}));


const ProfilQuizz = ({ match, location }) => {
   
  const classes = useStyles();

    return(

      <div className="app">
            <header className="app-header">
              
              

             <div className={classes.ecriture}>
                  USERNAME
              </div>

              <div className={classes.ecriture}>
                  NOM
              </div>

              <div className={classes.ecriture}>
                  PRENOM
              </div>

              <div className={classes.ecriture}>
                  EMAIL
              </div>

            </header>  
        </div>  
    );
}




export default ProfilQuizz
