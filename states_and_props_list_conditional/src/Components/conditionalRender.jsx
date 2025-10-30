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


// import { Component } from "react";

// export class Cars extends Component {
//     constructor (){
//         super();
//         this.state = {
//             CarStarted:false
//         }
//     }

//     handleCar = () => {
//         this.setState({CarStarted : !this.state.CarStarted})
//     }
    
//     render(){
//        return <>
//         {this.state.CarStarted ? <h1>Car is started and moving on road</h1> : <h1>Car is stopped on the road side</h1>}
//         <button onClick={this.handleCar}>{this.state.CarStarted ===true ? "car stop" : "car start"}</button>
//         <Bike data={this.state.CarStarted} />
//        </>
//     }
// }

// class Bike extends Component {

//     render(){
//         return <>
//             <h5>bike {this.props.data === true ? "started" :"stopped"}</h5>
//         </>
//     }

// }


import { Component } from "react";
export class Vehicle extends Component {
    constructor(){
        super();
        this.state = {
            convertVehicleToEV: false,
            seater:4
        }
    }
    
    changeToEv = () =>{
        this.setState({convertVehicleToEV: !this.state.convertVehicleToEV})
    }

    changeSeater = (seatsNo) =>{
        console.log("clicked")
            this.setState({seater: seatsNo})
    }

    render(){
        return <div>
            {/* {this.petrol && <h4>its petrol vehicle</h4>} */}
            <button onClick={this.changeToEv}>convert to ev</button>
           {this.state.convertVehicleToEV && <h1>car is convert to ev</h1>}
           {this.state.seater === 4 && <h5>its 4 seater car</h5>}
           {this.state.seater === 6 && <h5>its 6 seater car</h5>}
           {this.state.seater === 7 && <h5>its 7 seater car</h5>}
           <button onClick={()=>this.changeSeater(4)}>show 4 seater car</button>
           <button onClick={()=>this.changeSeater(6)}>show 6 seater car</button>
           <button onClick={()=>this.changeSeater(7)}>show 7 seater car</button>
        </div>
    }
}


