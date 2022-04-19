
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavBar() {

    const router = useRouter()

    return (
        <div className="flex">
            <Link href="/">
                <button className={`px-4 py-1.5 rounded font-semibold ${router.pathname === '/' && 'text-white bg-blue-500'}`}>Home</button>
            </Link>
            <Link href="/about">
                <button className={`px-4 py-1.5 rounded font-semibold ${router.pathname === '/about' && 'text-white bg-blue-500'}`}>About</button>
            </Link>
        </div>
    )

}