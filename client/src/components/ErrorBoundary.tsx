import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center gap-4 px-6"
          style={{ background: "oklch(0.12 0.008 260)" }}
        >
          <div
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "oklch(0.62 0.22 25)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            System Error
          </div>
          <p
            className="text-sm text-center max-w-md"
            style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'Inter', sans-serif" }}
          >
            Something went wrong. Please refresh the page and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 text-sm font-semibold tracking-wide mt-4"
            style={{
              background: "oklch(0.78 0.16 75)",
              color: "oklch(0.12 0.008 260)",
              fontFamily: "'Space Grotesk', sans-serif",
              borderRadius: "2px",
            }}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
