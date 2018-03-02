import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            foo: 'Click Me'
        };
    }
    handleClick() {
        if ( this.state.foo !== 'Tu es un champion du Javascript!' )
            this.setState({
                foo: 'Tu es un champion du Javascript!'
            });
        else
            this.setState({
                foo: 'Il ne faut pas non plus prendre la grosse têtet!'
            });
        console.log('click');
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.foo}
            </button>
        );
    }
}

export default MyComponent;