import React, {Component} from 'react';

class Components3 extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>Add</button>
            </div>
        );
    }
}

export default Components3;