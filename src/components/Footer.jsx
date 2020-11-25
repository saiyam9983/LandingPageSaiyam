import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import instalogo from "../Assets/instalogo.png";
import fblogo from "../Assets/fblogo.png";
import Twitterlogo1 from "../Assets/Twitterlogo1.png"
export default function Footer() {
  return (
    <>
      <Grid container spacing={0} style={{ backgroundColor: "#455a64" }}>
        <Grid item xs={12} style={{ backgroundColor: "#455a64",padding:5 }}>
          <Paper>
            <Typography
              style={{
                backgroundColor: "#455a64",
                color: "white",
                fontFamily: "Brandon Grotesque",
                textAlign: "center",
              }}
            >
              <h4>
                Subscribe to our news letter
                <TextField
                  id="filled-basic-sm"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    marginLeft: 5,
                    height: 30,
                    width: "20rem",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  style={{ marginLeft: 10 }}
                >
                  Subscribe
                </Button>
              </h4>
            </Typography>
            
          </Paper>
<Grid>
  <Paper>
  <footer style={{ backgroundColor:"#21212E"}}>
        <div className="container-fluid" style={{fontFamily:"Brandon Grotesque",color:"white",backgroundColor:"#212121"}}>
          <div className="row">
            <div className="col-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque numquam perspiciatis facilis sed commodi eligendi
                voluptate molestiae doloribus at, odit laborum provident illo,
                enim quos temporibus. Delectus tempora doloribus beatae.
              </p>
            </div>
            <div className="col-sm mx-5">
              <h2>Contact Us</h2>
              <p>
                123 4567890
              </p>
            </div>
            <div className="col-sm">
              <h2>Social Media</h2>
              <img src={fblogo} alt=""/>
              <img src={Twitterlogo1} alt=""/>
              <img src={instalogo} alt=""/>
            </div>
          </div>
        </div>
      </footer>
  </Paper>
</Grid>
        </Grid>
      </Grid>

      
    </>
  );
}
