import React, { Component } from 'react';
import styles from './styles.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(Date(), info, error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
                    Something goes wrong, reload the page please to proceed.
        </div>
      );
    }
    return this.props.children;
  }
}
