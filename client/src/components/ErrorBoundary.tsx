import { Component, type ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <main className="page-width content-page">
        <p className="eyebrow">TEMPORARY ERROR</p>
        <h1>Something went<br /><em>wrong.</em></h1>
        <p className="page-lead">Please reload the page and try again.</p>
        <button className="plain-button" type="button" onClick={() => window.location.reload()}>Reload page</button>
      </main>
    );
  }
}
