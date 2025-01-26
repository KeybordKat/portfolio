// Moon.tsx

interface MoonProps {
    style?: React.CSSProperties;
}

const Moon: React.FC<MoonProps> = ({ style }) => {
        return (
        <div className="moon" style={style}></div>
    );
};

export default Moon;
