
export default function Button({to, text, className, onClick}) {
    return (
        <button className="flex gap-1">
        <a href={to} target="_blank" className={`${className} font-neuethin`} onClick={onClick}>
            {text}
        </a>
        <svg width="5" height="5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86944 0L3.86637 1.53245L7.35806 1.54011L0 8.88438L1.08268 9.96859L8.46142 2.60517L8.45223 6.14053L9.98468 6.14359L10 0.0137921L3.8702 0H3.86944Z" fill="#000"></path></svg>
        </button>
    )
}