import React from 'react';
import engineerswb from '../Engineerswb.jpg';
import Intro from '../Component/Intro';
import Members from '../Component/Members';
import SignUp from './SignUp';

class App extends React.Component {

    state = {
        titles: [
            {title: 'About Us', id: 1},
            {title: 'What we do', id: 2},
            {title: 'Get Involved', id: 3},
            {title: 'Contact Us', id: 4}
        ],

        members: []
    }

    addMember = (member) => {
        member.id = Math.random();
        let members = [...this.state.members,member]
        this.setState({
            members:members
        })
    }

    deleteMember = (id) => {
        let members = this.state.members.filter(member => {
            return member.id !== id
        });

        this.setState({
            members: members
        })
    }

    render() {
        return (
            <div>
                <img src = {engineerswb} alt = 'home' width = '200' />
                <Intro titles = {this.state.titles}/>
                <Members deleteMember = {this.deleteMember} members = {this.state.members} />
                <SignUp addMember = {this.addMember}/>
            </div>
            
        );
    }
}

export default App;