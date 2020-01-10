import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


const useStyles = makeStyles(theme => ({

  ecriture:{
      fontWeight: 'bold',
      display: 'flex',
      marginTop: '100px',
  },

  creation: { //bouton craation
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //background: 'linear-gradient(45deg, #696969 30%, #C0C0C0 90%)',
    border: 50,
    borderRadius: 70,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    
    position: 'absolute',
    top: 80, left: 800, right: 0, bottom: 0,
    

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

  blanc:{
    marginTop:150,
  },

  klasse: { //bouton classe
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //background: 'linear-gradient(45deg, #696969 30%, #C0C0C0 90%)',
    border: 50,
    borderRadius: 70,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',

    /*position: 'absolute',
    top: 160, left: 100, right: 0, bottom: 0, */

   
    fontWeight: 'bold',
    height: 50,
    width: 1200,
    padding: '0 50px',
    //margin: 100,
    //marginLeft: 0,//theme.spacing(10),
    marginTop: 20,
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",    
    "&:hover": {
      transform: "scale(1.05)",
      //transform: "rotate(180deg)",
      //background: 'linear-gradient(45deg, #708090 30%, #2F4F4F 90%)', //gris clair
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', //rougeclair
      background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)', //rougefonce
    }
  },



}));


const HomeQuizz = ({ match, location }) => {
   
  const classes = useStyles();

  const [info, ChangeInfo] = React.useState({
    question1: 'ok',
    question2: '' 
  });



  var klasse = [

    {id: 1, classe: 31},
    {id: 2, classe: 32},
    {id: 3, classe: 33},
    {id: 4, classe: 34},
  ];


 function doGetTEXT(){

  var url = "http://10.8.94.137:8000/api/QCM/";

  var aPromise = fetch(url);

  aPromise
    .then(function(response){
      console.log("OK !");
      return response.json();
    })
    .then(function(data) {
      console.log(data[0]["answers"][2]);

      ChangeInfo(prev => ({
        ...prev,
        question1: data[0]["answers"][2],
      }));
    })
    .catch(function(error){
      console.log("Error");
      console.log(error);
    });
}

    return(

      <div >
            <header>
             

              <Link to="/robert">
                <Button className={classes.creation} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary"
                        /*onClick={doGetTEXT}*/
                        > 
                  <p>Créer un quizz {/*{info.question1}*/}</p>
                </Button> 
              </Link>
              
              

              {/* <Link to="Classe1">
                <Button className={classes.klasse} 
                        shape="chubby" 
                        variant="contained" 
                        color="primary"> 
                  <p>Classe 1</p>
                </Button> 
              </Link>     */}

              <p className={classes.blanc}/>

              <table>
                <tbody>
                  {klasse.map(({ id, classe}) => (                      
                    <tr key={id}>
                      <td> 
                        <Link to={`/Classes/${classe}`}>
                          <Button className={classes.klasse} 
                                  shape="chubby" 
                                  variant="contained" 
                                  color="primary"> 
                            <p>Classe {classe}</p>
                          </Button> 
                        </Link> 
                      </td>                      
                    </tr>
                  ))}
                </tbody>
              </table>

             {/*} {buttons}*/}
              

            </header>  
        </div>  
    );
}




export default HomeQuizz;
