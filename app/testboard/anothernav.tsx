export default function Anothernav() {
    const navLinks = ['Home', 'About', 'Contact'];

    return (
        <nav className="bg-blue-500 flex justify-end font-bold">
            <ul className="flex flex-row gap-2 mr-10">
                {navLinks.map((link, i) => {
                    return <li className="text-white p-5 cursor-pointer" key={i + 1}>{link}</li>
                })}
            </ul>
        </nav>
    )
}