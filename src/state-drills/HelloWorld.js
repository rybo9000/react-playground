import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            who: "world"
        }
    }

    updateWho = (who) => {
        this.setState({
            who: who
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.updateWho.bind(this, "World")}>World</button>
                <button onClick={this.updateWho.bind(this, "Friend")}>Friend</button>
                <button onClick={this.updateWho.bind(this,"React")}>React</button>
            </div>
        )
    }
}

export default HelloWorld;