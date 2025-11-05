import { Component } from "react";
import axios from "axios"

export class UserCards extends Component {
    constructor(){
        super();
        this.state = {usersData:[], time:""}
    }

    controller = new AbortController() 


    fetchUsers(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {this.setState({usersData: response.data})})
        .catch(err=> console.log(err))
    }

    componentWillUnmount(){
        clearInterval(this.time)
        this.controller.abort()
        this.setState({usersData:[]})
        console.log("componentWillUnmount")
        
    }
    log(){
        this.logger = "sharath"
    }

    componentDidMount(){
        this.fetchUsers() 
        setInterval(()=>{console.log("time running")}, 2000)
        this.time =  setInterval(()=>{console.log("time running")}, 2000)
        console.log("componentDidMount")
    }

    render(){
        console.log(this)
        return <div>
            <p>user cards component</p>
            <div>
                {this.state.usersData.map(item => <div style={{ border:"1px solid tomato" }} key={item.id}> 
                        <p>Name {item.name}</p>
                        <p>Username {item.username}</p>
                        <p>Email {item.email}</p>
                    </div>)}
                    <button onClick={this.log}>click</button>
            </div>
        </div>
    }
}