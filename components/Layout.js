
import NavBar from './NavBar';

export default function Layout({ children }) {

    return (
        <>
            <div className="min-h-screen min-w-0">
                <div className="sticky top-0 bg-white shadow p-4 flex items-center justify-center">
                    <div className="flex-1">
                    </div>
                    <div>
                        <NavBar />
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )

}