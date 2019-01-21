import React from 'react';
class Player extends React.Component { 
    constructor(props){
        // menambah props kedalam parameter, agar score dari leaderboard bisa digunakan
        super(props)
        this.state = {
            score : this.props.score
        }
        this.incrementScore = this.incrementScore.bind(this)
        this.decrementScore = this.decrementScore.bind(this)
    }
    incrementScore(event){
        this.setState({
            score : this.state.score + 10
        });
    }
    decrementScore(event){
        this.setState({
            score : this.state.score - 10
        });
    }
    render(){
        const style = {
            player: {
                display: 'flex',
                padding : 10
            },
            name : {
                flex : '1'
            },
            playerScore: {
                width : 200
            },
            score : {
                padding : 20
            },
            button : {
                padding : 10
            }
            
        }
        return (
            <div style={style.player}>
                <div style={style.name}>
                    {this.props.name}
                </div>
                <div style={style.playerScore}>
                    <div>
                        <button onClick={this.decrementScore} style={style.button}>-</button>
                        <span style={style.score}>{this.state.score}</span>
                        <button onClick={this.incrementScore} style={style.button}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Player;