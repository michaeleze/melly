export default function Container({ children, style }) {
    return <div className={`${style} container mx-auto px-5`}>{children}</div>
}
