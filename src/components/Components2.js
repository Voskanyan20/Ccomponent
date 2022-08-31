import React, {Component} from 'react';

class Components2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {count} = this.props
        return (
            <div>
                <h1>{count}</h1>
            </div>
        );
    }
}

export default Components2;