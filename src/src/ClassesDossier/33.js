import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      //display: 'flex',
      marginTop: '90px',
    },
}));


const Classe33Quizz = ({ match, location }) => {
   
  const classes = useStyles();

  const eleves = [
    {id: 1, nom: 'CROWNGUARD', prenom: 'Lux'},
    {id: 2, nom: 'LAURENT', prenom: 'Fiora'},
  ]

  const espace = '\u00a0'; //unicode espace

  return(

    <div className="app">
      <header className="app-header">
      
        <div className={classes.ecriture}>

          <h1>Classe 33</h1>
          <p> Liste des élèves : </p>

             
          <table>
            <tbody>
              {eleves.map(({ id, nom, prenom }) => (                      
                <tr key={id}>
                  <td >{id} -{espace}</td>
                  <td >{prenom} {nom}</td>
                </tr>
              ))}
            </tbody>
          </table>
                  
                
           


        </div>
      </header>  
    </div>  
  );
}




export default Classe33Quizz
