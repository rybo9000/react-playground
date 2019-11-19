import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            words: "start"
        }

    }

    bombTick() {
        
        this.state.count++;
        
        console.log(this.state.count);
        
        if (this.state.count >= 8) {
            this.setState({
                words: "BOOM!"
            })
            clearInterval(this.interval)
        }
        else if (this.state.count % 2 === 0) {
            this.setState({
                words: "TICK"
            })
        }

        else if (this.state.count %2 !== 0) {
            this.setState({
                words: "TOCK"
            })
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.bombTick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <p>
                {this.state.words}
            </p>
        )
    }
}

export default Bomb;