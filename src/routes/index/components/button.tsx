import "./styles.css";

export interface ButtonProps {    
    children?: React.ReactNode;
    onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button
        className="button"
        onClick={onClick}
        >
        {children}
        </button>
    );
}