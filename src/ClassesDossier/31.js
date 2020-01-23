import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      //display: 'flex',
      marginTop: '90px',
    },
}));


const Classe31Quizz = ({ match, location, numero}) => {
   
  const classes = useStyles();

  const eleves = [
    {id: 1, nom: 'BUI', prenom: 'Robert'},
    {id: 2, nom: 'PORCHETTE', prenom: 'Rebecca'},
    {id: 3, nom: 'RESSE', prenom: 'Alexandra'},
    {id: 4, nom: 'ROSSI', prenom: 'Agostino'},
    {id: 5, nom: 'TASSEL', prenom: 'Marine'},
  ]

  const espace = '\u00a0'; //unicode espace

  return(

    <div className="app">
      <header className="app-header">
      
        <div className={classes.ecriture}>

          <h1>Classe 31</h1>
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




export default Classe31Quizz
