import React from 'react'
import axios from 'axios'
import Card from './Card';

class Jokes extends React.Component {
    state = { jokeData: "" }
    componentDidMount() {
        axios.get("https://safe-falls-22549.herokuapp.com/random_joke").then(
            (x) => {
                this.setState({
                    jokeData: x.data
                })
            }
        )
    }

    render() {
        return (
            <div>
                <div className="container text-right py-5">
                    <Card setup={this.state.jokeData.setup} punchline={this.state.jokeData.punchline} />
                </div>

            </div>
        )
    }
}
export default Jokes;