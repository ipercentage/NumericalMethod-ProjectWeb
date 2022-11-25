import {React,Component} from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto",
};
const DIV ={
  width:"100%",
  margin:"0 auto",
};

class Secant extends Component{
  constructor(){
    super();
    console.log("constuctor called");
}
  componentDidMount(){
    console.log("componentDidMount called");
  }  
  calSecant(){
     var equation= document.getElementById("EQUATION").value;
     var x0 = document.getElementById("x0").value;
     var x1 = document.getElementById("x1").value;
     var x,x0,x1,x2,df,fx0,fx1,error;
    
    do{
        x = x0;
        fx0 = eval(equation);
        x = x1;
        fx1 = eval(equation);
        df= (fx0-fx1)/(x0-x1);
        x2 = x1-(fx1/df);
        x0 = x1;
        x1 = x2;
        error = Math.abs((x1-x0)/x1)*100;
      }while(error>0.000001);
      console.log(x2);

      document.getElementById("ansEquation").innerHTML=x2;
      document.getElementById("showEquation").innerHTML=equation;
     
  }
  
  render() {
    console.log("render called")
    return(
        <div >
          <div style={mainDiv}>
            <div style={DIV}>
            
              <h3>Secant Method</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Input number
              </Form.Label>

              <div>
                <Form.Control id="EQUATION" type="text" step="1" placeholder="Equation" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="x0" type="number" step="1" placeholder="x0" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="x1" type="number" step="1" placeholder="x1" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
            </div>
            
             <Button onClick={this.calSecant}>
             Calculate
            </Button>
            </Form.Group>
          </Form>
          <div>
            <h>Answer of f(x) = <h id="showEquation"></h> <h> is </h><h id="ansEquation"></h></h>
          </div>
             </div>
         </div>
      </div>
    );
  }
 }
export default Secant; 
