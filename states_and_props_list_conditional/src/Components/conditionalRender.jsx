// import { Component } from "react";

// export class Cars extends Component {
//     constructor (){
//         super();
//         this.state = {
//             isCarStarted:true
//         }
//     }
//     stopCar = () =>{
//         this.setState({isCarStarted:false})
//     }

//     startCar = () =>{
//         this.setState({isCarStarted:true})
//     }

//     render(){
//        if(this.state.isCarStarted === true){
//         return <>
//             <h1>Car is started and moving on road</h1>
//             <Bike start={this.state.isCarStarted}/>
//             <button onClick={this.stopCar}>stop car</button>
//         </>
//        }else{
//         return <>
//             <h1>Car is stopped on the road side</h1>
//             <Bike start={this.state.isCarStarted}/>
//             <button onClick={this.startCar}>start car</button>
//         </>
//        }
//     }
// }

// class Bike extends Component {

//     render(){
//         if(this.props.start === true){
//             return <p>Bike started and running</p>
//         }
//         else{
//             return <p>Bike stopped and not running</p> 
//         }
//     }

// }


import { Component } from "react";

export class Cars extends Component {
    constructor (){
        super();
        this.state = {
            CarStarted:false
        }
    }

    handleCar = () => {
        this.setState({CarStarted : !this.state.CarStarted})
    }
    

    render(){
       return <>
        {this.state.CarStarted ? <h1>Car is started and moving on road</h1> : <h1>Car is stopped on the road side</h1>}
        <button onClick={this.handleCar}>{this.state.CarStarted ===true ? "car stop" : "car start"}</button>
        <Bike data={this.state.CarStarted} />
       </>
    }
}

class Bike extends Component {

    render(){
        return <>
            <h5>bike {this.props.data === true ? "started" :"stopped"}</h5>
        </>
    }

}