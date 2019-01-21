import React from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';
class Leaderboard extends React.Component {
    constructor(props){
        super(props)
        const PLAYERS = [
            {
                id : 1,
                name :  "Brendan Eich",
                score : 25,
            },
            {
                id : 2,
                name :  "Christ Lattner",
                score : 25,
            },
            {
                id : 3,
                name :  "Jose Valim",
                score : 30,
            },
        ]
        this.state  = {
            members: PLAYERS
        }
        this.onPlayerAdd = this.onPlayerAdd.bind(this)
    }
    onPlayerAdd(name){
        let new_members = this.state.members
        new_members.push({
            id : new_members.length + 1,
            name : name,
            score : 10
        })
        this.setState({
            members : new_members
        })
    }
    render() {
        const style = {
            container: {
                padding : 60
            }
        }
        return (
            <div style={style.container}>
                <h1>Leaderboard</h1>
                <Players members={this.state.members}/>  
                <AddPlayer onAdd={this.onPlayerAdd}/> 
            </div>
        )
    }
}

export default Leaderboard