import React, {Component} from 'react';
import Components3 from "./components/Components3";
import Components2 from "./components/Components2";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }

    render() {
        return (
            <div>
                <Components3
                    handleClick={this.handleClick}
                />
                <Components2 count={this.state.count}/>
            </div>
        );
    }
}

export default App;