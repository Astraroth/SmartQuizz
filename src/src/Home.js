import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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

  const [data_back, setData] = React.useState([]);
  
  React.useEffect(() => {
      var url = "http://192.168.0.23:8000/api/Quiz/"; 
      var aPromise = fetch(url);
      aPromise
        .then(function(response){
          console.log("OK !");
          return response.json();
        })
        .then(async function(data) {
          let temp = [];

          data.forEach(element => temp.push(element))
          setData(temp)
          //console.log(data)
        })
        .catch(function(error){
          console.log("Error");
          console.log(error);
        });
    
        
  }, []); //call only once with this methode
  
  const [data_simple, setSimple] = React.useState([]);
  const [openSimple, setOpenSimple] = React.useState(false);
  
  
  
  const classes = useStyles();

  const [info, ChangeInfo] = React.useState({
    question1: 'ok',
    question2: '' 
  });

  const handleClickOpen = (e) => {
    setOpenSimple(true);
    setSimple(data_back.find(element => element.id === e))
  };

  const handleClose = () => {
    setOpenSimple(false);
  };


  var klasse = [

    {id: 1, classe: 31},
    {id: 2, classe: 32},
    {id: 3, classe: 33},
    {id: 4, classe: 34},
  ];

  function at(){
    ///recupere les données des question
  }

  function questionSimpleData(){///render les questions

    //appelle at ici, pense a changer de nom
    return <p>attttt</p>
  }


  function simpleData(){////ajouter 
    
    if(typeof(data_simple) !== 'undefined' && data_simple.size !== 0)
    console.log(data_simple.questions);
      return (
      <Dialog open={openSimple} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{data_simple.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {questionSimpleData()}
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      );
      
  }

  function renderQuestion()///en veriter render le quizz
  {
    //showTitle();
    if(typeof(data_back) !== 'undefined' && data_back.size!== 0)
    {
      console.log("Ici")
      console.log(data_back)
      return( data_back.map((element , index) =>
      <tr key={index}>
        <td> 
        <Button className={classes.klasse} 
          shape="chubby" 
          variant="contained" 
          color="primary"
          value_id={element.id}
          onClick={() => handleClickOpen(element.id)}
          >

          <p>{element.title}</p>
        </Button>
        </td>                      
      </tr>
      
      )) 
    } 

    return <p>Rien</p>
  }

  
//???
 function doGetTEXT(){

  var url = "http://192.168.0.23:8000/api/QCM/";

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
              {/* <table>
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
              </table> */}
              
{/* pour retirer la liste des classes */}
              
              <table>
                <tbody>
                {renderQuestion()}
                  {/* {klasse.map(({ id, classe}) => (                      
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
                  ))} */}
                </tbody>
              </table>

             {/*} {buttons}*/}
              

            </header>
            {simpleData()}  
      </div>  
    );
}




export default HomeQuizz;
