import React, { Component } from 'react';
import './ErrorBoundry.scss';
import ErrorIndicator from './../ErrorIndicator/ErrorIndicator';

class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}
export default ErrorBoundry;