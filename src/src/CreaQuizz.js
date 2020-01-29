import React from 'react';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import { borders } from '@material-ui/system';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from './logo.png';
import { BrowserRouter as Router, Route,NavLink, Link ,withRouter} from "react-router-dom";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
    card: {

    marginTop: theme.spacing(4),
    height: 190,
    width: 205,
    background: '#282c34',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
        
        transform: "scale(1.03)",
      }

  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: 240,
    flexShrink: 0,

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    background: '#2E3B55',
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  avatar: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 60,
    marginTop: theme.spacing(3),
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
        
        transform: "scale(1.1)",
      }
  },
  play: {
    backgroundColor: '#FFFFFF',
    height: 80,
    width: 80,

    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",

    "&:hover": {
        
        transform: "scale(1.1)",
        //transform: "rotate(180deg)",
      }

  },
  quzz: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    fontWeight: 'bold',
    height: 120,
    padding: '0 100px',
    margin: 10,
    transition: "0.5s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
        
        transform: "scale(1.1)",
        //transform: "rotate(180deg)",
        background: 'linear-gradient(45deg, #FE2553FF 30%, #FF610DFF 90%)',
      }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  toolbar: {
    minHeight: 80,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

var data = [
  {
    statement:'Il est plus facile de calculer l´exponentielle d´un endomorphisme :',
    timer:'00:00:00',
    qu_type:'MCQ',
    answers:['Diagonalisable','Nilpotent','Symetrique','Orthogonal'],
    correct_answers:[3],
  },
  {
    statement:'Un espace complet préhilbertien est appelé :',
    timer:'00:00:00',
    qu_type:'MCQ',
    answers:['Espace de Banach','Espace de Hermitte','Espace de Jones','Espace de Hilbert'],
    correct_answers:[3],
  },
  {
    statement:'Le lemme de Rieman Lebesgue est valable :',
    timer:'00:00:00',
    qu_type:'MCQ',
    answers:['Pour une fonction continue','Pour une fonction continue par morceaux','Pour une fonction en escalier','Pour une fonction 2-Pi-périodique'],
    correct_answers:[3],
  } ,
  {
    statement:'Le sens de la vie est 42',
    timer:'00:00:00',
    qu_type:'TF',
    answer: true,
  } ,
  {
    statement:'Citez des Pokémons de type Feu : ',
    timer:'00:00:00',
    qu_type:'OQ',
    answer: 'Dracaufeu, Salamèche, Reptincel',
  } ,
]

const QcmPage = ({ match, location }) => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const {
    params: { userId }
  } = match;

  function doGetTEXT()  {

    var url = "http://192.168.0.23:8000/api/Quiz/";

    

    var objTo = { statement:"Pourquoi la vie?", timer:"00:00:00", qu_type:"MCQ", answers:["a","b","c","la réponse d"], correct_answers:[3]};
    console.log(data[0]);
    console.log(objTo); 
    //var objTo = data[i];
    
    var aPromise = fetch(url);

    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.json();
      })
      .then(function(data){
          console.log(data);

      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);

      });
   
  }

  async function sendQCMData()  {//asyn

    var idData = [];

    for(var i=0;i<data.length;i++){

      var url = "http://10.8.95.34:8000/api/QCM/";

      var objTo = data[i];

      console.log(JSON.stringify(objTo));

      var aPromise = fetch(url, { 
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(objTo),
          headers: {
              'Content-Type':'application/json' 
          }
      });

      await aPromise
        .then(await function(response) {
            console.log("OK! Server returns a response object:");
            return response.json();
        })
        .then(function(data){
            console.log(data["id"]);
            idData.push(parseInt(data["id"],10));
            console.log(idData);
            setOpen(false);
        })
        .catch(function(error)  {
            console.log("Noooooo! Something error:");
            console.log(error);

        });

  }

    var url = "http://10.8.95.34:8000/api/Quiz/";

    console.log(idData);
    console.log([15,16]);

    var objTo = { questions:idData, online:false};
    console.log(JSON.stringify(objTo));

    var aPromise = fetch(url, { 
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(objTo),
        headers: {
            'Content-Type':'application/json' 
        }
    });

    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.json();
      })
      .then(function(data){
          console.log(data);
      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);

      });
  
   
  }


/*
  function sendQuizData() {
    var url = "http://10.8.95.34:8000/api/Quiz/";
    console.log(idData);
    console.log([15,16]);
    var objTo = { questions:idData, online:false};
    console.log(JSON.stringify(objTo));
    var aPromise = fetch(url, { 
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(objTo),
        headers: {
            'Content-Type':'application/json' 
        }
    });
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.json();
      })
      .then(function(data){
          console.log(data);
      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);
      });
  }*/

  function renderType(){//Affichage type de chaque genre de question
    //AJOUT D'une sécurité --> different de l'undifined
    if(typeof(data[userId - 1]) !== 'undefined' && data[userId - 1].qu_type === "MCQ"){//A MODIFIER EN FONCTION DU NOMBRE DE REPONSES MIS PAR LE PROF
      let reponse=data[userId - 1].answers.map((element) =>
        <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
          {element}
        </Button>
      );
      return(
        <div>
            <p>{data[userId - 1].statement}</p>
            {reponse}
        </div>

        );
    }
    else if(typeof(data[userId - 1]) !== 'undefined' && data[userId - 1].qu_type === "TF"){
      return(
        <div>

            <p>{data[userId - 1].statement}</p>

            <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
              VRAI
            </Button>

            <Button className={classes.quzz} shape="chubby" variant="contained" color="primary">
              FAUX
            </Button>

        </div>
        );
    }
    else if(typeof(data[userId - 1]) !== 'undefined' && data[userId - 1].qu_type === "OQ"){
      return(
        <div>

            <p>{data[userId - 1].statement}</p>

            <TextField
              margin="dense"
              id="answer"
              name="answer"
              label="Type your answer : "
              fullWidth
            />
        </div>
        );
    }


  }


  return(

        <div className="App">
          <header className="App-header">

        <div className={classes.drawerHeader} />

            {renderType()}


            <img src={logo} style={{width: 150, height: 90, marginTop: 35}} alt="Logo" />

            
            <div className="App-row" style={{ marginLeft: 950 }}>

            <Avatar className={classes.play} >
            <IconButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </IconButton>
            </Avatar>


            <Avatar className={classes.play} style={{ marginLeft: 20 }}>
            <IconButton  onClick={sendQCMData}>
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </IconButton>
            </Avatar>

             </div>

            

          </header>

        </div>

    );
};

////////////////////
function CreaQuizz() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [type, setType] = React.useState("");

  const [form, setValues] = React.useState({
    question: '',
    reps:["",""],//minimum 2 reponse
    tf:true,
    oq:'LALALALALA',
  });


  //AJOUT REB
  const [data_, setData] = React.useState(data);
  //AJOUT REB, pour la douille
  let  [,setState]=React.useState();

  const handleTypeChange = event => {
    setType(event.target.value);
  };

  const updateField = e => {
    if(String([e.target.name]).match(/^\d+$/))
    {
      let temp=form.reps;
      temp[[e.target.name]]=e.target.value;
      setValues({
        ...form,
        reps: temp,
      });
      console.log(form.reps);
    }else{
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
    setState({});
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clean_form = () => {
    setValues({
      question: '',
      reps:["",""],//minimum 2 reponse
      tf:true,
      oq:'LALALALALA',
    });
  }

  const addSlide = () => {

    if(type === "QCM"){
      var obj = { statement: form.question, timer:"00:00:00", qu_type:'MCQ', answers:form.reps, correct_answers:[3]};
      data.push(obj);
    }
    else if(type === "Vrai/Faux"){
      var obj = { statement: form.question, timer:"00:00:00", qu_type:'TF', answer:form.tf};
      data.push(obj);
    }
    else if(type === "Question ouverte"){
      var obj = { statement: form.question, timer:"00:00:00", qu_type:'OQ', answer:form.oq};
      data.push(obj);
    }
    //AJOUT REB
    clean_form();//pour clean le formulaire
    setData(data);
  }
/*EFFACEMENT DE SLIDEs*/
  const removeSlide = (i) => {//Retirer les consol.log
    console.log("avant:");
    data.forEach(element => console.log(element.statement))

    data.splice(i, 1);

    console.log("apres:")
    data.forEach(element => console.log(element.statement))

    //AJOUT REB
    setData(data);
    //Verification
    console.log("\napres pour l'autre:")
    data_.forEach(element => console.log(element.statement))
    ///DOUILLE vue sur https://reactgo.com/react-force-update-render/
    setState({});
  }

  /*Ajout de Réponse*/
  const addAnswer = () => {
    setValues({
      ...form,
      reps: [...form.reps,""],
    });
    console.log(form.reps)
    setState({});
  };

  /*Retire la dernier reponse*/
  const removeAnswer = () => {
    if(form.reps.length>2)
    form.reps.pop();
    setState({});
    
  };

  function renderType() {
    /*A revoir plus tard!!!! */
    let donc=form.reps.map((element,index) =>
      <TextField
        margin="dense"
        name={index}
        label={"Answer "+index+ ":"}
        value={element}
        onChange={updateField}
        fullWidth
      />
    );
    

    if(type === "QCM"){
      return(

        <div>

                <TextField
                  margin="dense"
                  id="question"
                  name="question"
                  label="Type your question :"
                  value={form.question}
                  onChange={updateField}
                  fullWidth
                />
                
                {donc}

                <IconButton onClick={() => addAnswer()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </IconButton>
                <IconButton onClick={() => removeAnswer()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </IconButton>

                
          </div>
        );
    }
    else if(type === "Vrai/Faux"){
      return(

        <div>

                <TextField
                  margin="dense"
                  id="question"
                  name="question"
                  label="Type your question :"
                  value={form.question}
                  onChange={updateField}
                  fullWidth
                />

          </div>

        );
    }
    else if(type === "Question ouverte"){
      return(
        <div>

                <TextField
                  margin="dense"
                  id="question"
                  name="question"
                  label="Type your question :"
                  value={form.question}
                  onChange={updateField}
                  fullWidth
                />

          </div>
        );
    }

  }
/*
  React.useEffect(() => {
    setData(data);
  });
*/

/*Affiche les questions sur le coté gauche */

  return (

   
    <Router>

    <div className="App-header">

    <div className={classes.root}>
      <AppBar className={classes.appBar} >
        <Toolbar className={classes.toolbar}>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        >
        {/* Ici pour etre plus précis (Affiche les questions sur le coté gauche) */}
        <Grid
        direction="column"
        alignItems="center"
        container justify="center">


            {data_.map(function (item, index){

                if(index === 0){
                  return( <Card style={{ marginTop: 100 }}
                  className={classes.card} >

                  <NavLink to={`/slide/${index + 1}`} style={{ textDecoration: 'none' , color:'white'}}>
                    <ButtonBase>
                      <CardContent>
                        <h3>Slide {index + 1} ({item.qu_type}) </h3>

                        <h4>{item.statement}</h4>
                        
                        <Button onClick={() => removeSlide(index)} > {/* Ne pas appeler la fonction directement mais la mettre dans une fonction fléchée pour eviter l'appel direct au render */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </Button>

                      </CardContent>

                    </ButtonBase>
                  </NavLink>

                  </Card>);
                }
                else{
                  return( <Card className={classes.card} >

                    <NavLink to={`/slide/${index + 1}`} style={{ textDecoration: 'none' , color:'white'}}>
                  <ButtonBase>
                    <CardContent>

                      <h3>Slide {index + 1} ({item.qu_type}) :</h3>

                      <h4>{item.statement}</h4>
                      
                      <Button onClick={() => removeSlide(index)} >{/* Ne pas appeler la fonction directement mais la mettre dans une fonction fléchée pour eviter l'appel direct au render */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                      </Button>

                    </CardContent>

                    </ButtonBase>
                    </NavLink>

                  </Card>);
                }

            })}

            

            <Avatar className={classes.avatar} >
            <IconButton onClick={handleClickOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </IconButton>
            </Avatar>

            <Dialog TransitionComponent={Transition} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Create a quizz</DialogTitle>
              <DialogContent>


              <form className={classes.form} noValidate>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="type">Type</InputLabel>
                  <Select

                    value={type}
                    onChange={handleTypeChange}
                    inputProps={{
                      name: 'type',
                      id: 'type',
                    }}
                  >
                    <MenuItem value="QCM">QCM</MenuItem>
                    <MenuItem value="Vrai/Faux">Vrai/Faux</MenuItem>
                    <MenuItem value="Question ouverte">Question ouverte</MenuItem>
                  </Select>
                </FormControl>
              </form>

              <div>

              {renderType()}

              </div>

              </DialogContent>

              <DialogActions>
                <Button onClick={(event) => { handleClose(); addSlide()}} color="primary">
                  OK
                </Button>
              </DialogActions>

            </Dialog>


          </Grid>

      </Drawer>

      <main>

        <Route exact path="/slide/:userId" component={QcmPage} />

      </main>

    </div>

    </div>

    </Router>
  );
}

export default CreaQuizz;