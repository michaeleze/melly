import Link from 'next/link'

export default function Header() {
    return (
        <Link href="/">
            <h2
                className="hover:underline text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight"
                style={{ color: "orange" }}
            >
                Michael.
            </h2>
        </Link>
    )
}
