export default function RedCircle({ onClick }) {
    return (
        <div
            className="fixed z-40 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
            style={{ top: '20px', left: '20px' }}
            onClick={onClick}
        >
        </div>
    );
}