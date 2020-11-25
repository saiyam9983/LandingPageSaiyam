import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Support1 from "../Assets/Support1.png";
import Playlist from "../Assets/Playlist.png";
import Subtittle from"../Assets/Subtittle.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    display:"flex"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "White",
    backgroundColor: "#21212E",
    fontFamily: "Brandon Grotesque",
    display:"flex"
  },
  paper1: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: "White",
    backgroundColor: "#21212E",
    fontFamily: "Brandon Grotesque",
    
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <>
      <h1 style={{fontFamily:"Brandon Grotesque",color:"White",padding:10}}>Features</h1>
      <section>
    <div className={classes.root}>
     


      <Grid container spacing={0} style={{height:"60vh"}}>
        <Grid item  sm={8}>
      
          <Paper className={classes.paper}>
         
            <Typography style={{fontFamily:"Brandon Grotesque",display:"inline"}}>
              
              <p style={{opacity:0.8,width:"50%",marginTop:"8%"}}>
              <h2 style={{fontFamily:"Brandon Grotesque",marginTop:"5%"}}>We Have partnered with awesome folks </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium vitae doloribus quisquam vel ad? Aspernatur
                perferendis, atque earum accusantium ipsum, animi recusandae
                nobis minus odit voluptate illum veritatis reprehenderit quos.
              </p>
              
              <Button variant="contained" color="primary" >
                  Click
              </Button>
              
            </Typography>
            <div className={classes.paper} style={{display:"flex"}}>
            <Card className={classes.root} variant="outlined" style={{backgroundColor:"#21212D",  height:"40vh",marginBottom:"5%"}}>
      <CardContent >
          <div style={{maxWidth:"100%",display:"block"}}>
      <img src={Support1} alt="" style={{float:"left"}}/>
      </div>
      <br/>
        <Typography  color="textPrimary" style={{color:"white",textAlign:"left"}}>
           <br/>
           <br/>
        <h4>
            Collobrated Playlist
        </h4>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam.
        </p>
         
   
        </Typography>
     
         
       
      </CardContent>
     
    </Card>
            </div>
            
            
          </Paper>
          
        </Grid>
        <Grid item sm={2} >
          <Paper className={classes.paper1}>
          <Card className={classes.root} variant="outlined" style={{backgroundColor:"#21212D",  height:"30vh",marginBottom:"5%"}}>
      <CardContent >
          <div style={{maxWidth:"100%",display:"block"}}>
      <img src={Subtittle} alt="" style={{float:"left"}}/>
      </div>
      <br/>
        <Typography  color="textPrimary" style={{color:"white",textAlign:"left"}}>
           <br/>
           <br/>
        <h5>
            Suggested Playlist
        </h5>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam.
        </p>
         
         
        </Typography>
     
         
       
      </CardContent>
     
    </Card>
    <Card className={classes.root} variant="outlined" style={{backgroundColor:"#21212D",  height:"30vh",marginBottom:"20%"}}>
      <CardContent >
          <div style={{maxWidth:"100%",display:"block"}}>
      <img src={Playlist} alt="" style={{float:"left"}}/>
      </div>
      <br/>
        <Typography  color="textPrimary" style={{color:"white",textAlign:"left"}}>
           <br/>
           <br/>
        <h5>
            Lyrics on the go
        </h5>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam.
        </p>
         
         
        </Typography>
     
         
       
      </CardContent>
     
    </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <hr/>
    
    </section>
    </>
  );
}
