import {React ,Component } from "react";

class Home extends Component {
    constructor(){
        super();
        console.log("contructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    render(){
        console.log("render called");
        return(
            <div>
                <h2>6404062630261</h2>
                <h2>Chonthitta Chinawong</h2>
            </div>
        );
    }
}
export default Home;