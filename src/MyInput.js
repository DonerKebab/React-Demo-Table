import React from "react";

class MyInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 18
        }
    }

    componentDidMount() {
        setTimeout(()=> {this.setState({age: 19});}, 2000);
    }

    componentDidUpdate() {
        console.log("Age is updated");
    }

    render() {
        return (
            <div backgroundcolor={this.state.color}>
                <input type="text" value={this.props.content}  />
                <p>I'm {this.state.age} years old</p>
            </div>
        ) 
            
    }

}

export default MyInput;