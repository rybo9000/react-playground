import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chamber: null,
            spinningTheChamber: false,
            status: "test"
        }

    }

    static defaultProps = {
        bulletInChamber: 8
    }

    pullTrigger = () => {
        
        
        
        this.setState({
            spinningTheChamber: true,
            status: "Spinning the chamber and pulling the trigger!"
        })

        let timeout = setTimeout((props) => {
            
            let result = this.state.chamber === this.props.bulletInChamber ? "BANG!!!!" : "You're Safe!";
            
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false,
                status: result
            })
            clearTimeout(timeout);
        }, 2000)

    }

    render(props) {
        return (
            <div>
                <p>{this.state.status}</p>
                <button onClick={this.pullTrigger}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;