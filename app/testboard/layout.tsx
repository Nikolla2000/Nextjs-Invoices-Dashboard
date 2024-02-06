import Anothernav from "./anothernav";

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <div className="navigation">
                <Anothernav/>
            </div>
            <div>{children}</div>
        </>
    )
}