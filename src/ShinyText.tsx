import './ShinyText.css';

// Define the prop types
interface ShinyTextProps {
    text: string; // The text to display
    disabled?: boolean; // Optional: Whether the text is disabled
    speed?: number; // Optional: Animation speed (default: 5)
    className?: string; // Optional: Additional CSS class names
  }

  const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

return (
  <div
    className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
    style={{ animationDuration }}
  >
    {text}
  </div>
);
};

export default ShinyText;