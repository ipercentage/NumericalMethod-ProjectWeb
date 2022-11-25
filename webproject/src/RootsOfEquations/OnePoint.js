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

class OnePoint extends Component{
  constructor(){
    super();
    console.log("constuctor called");
  }
  componentDidMount(){
    console.log("componentDidMount called");
  }  
  calOnePoint(){

    var equation= document.getElementById("EQUATION").value; 
    console.log("+Hello"+equation);
    var xi = document.getElementById("Xi").value;
    var fx,error,i=0,xo,x1,xn;
    let x = [];

    /*function calf(y){
      fx = eval(equation);
      return fx;
    }*/
    do{
      x1 = xi
      x[i+1] = eval(equation);
      i++;
      error = Math.abs((x[i+1]-x[i])/x[i+1]);

    }while(error>0.000001);
    console.log(x[i+1]);
    /*
    x1 = xi;
    do{
        xo=x1;
        xn = calf(xo);
        xo = xn;
        error=Math.abs(((xn-xo)/xn)*100);
    }while(error>0.000001);
    console.log(xo);
    */

    document.getElementById("ansEquation").innerHTML=(x[i+1]);
    document.getElementById("showEquation").innerHTML=equation;
  }
  
  render() {
    console.log("render called")
    return(
      <div >
        <div style={mainDiv}>
          <div style={DIV}>
            
          <h3>One-point Iteration Method</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Input value
              </Form.Label>

              <div>
                <Form.Control id="EQUATION" type="text" step="1" placeholder="Equation" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
                <Form.Control id="Xi" type="number" step="1" placeholder="Xi" style={{width:"20%",margin : "0 auto"}} ></Form.Control>
              </div>

              <Button onClick={this.calOnePoint}>
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
export default OnePoint;