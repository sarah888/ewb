import React, {Component} from 'react'

class SignUp extends Component {

    state = {
        name: null,
        snumber: null,
        position: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMember(this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'name'>Name:</label>
                    <input type = 'text' id = 'name' onChange = {this.handleChange} />
                    <label htmlFor = 'name'>Student Number:</label>
                    <input type = 'text' id = 'snumber' onChange = {this.handleChange} />
                    <label htmlFor = 'name'>Position:</label>
                    <input type = 'text' id = 'position' onChange = {this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp;