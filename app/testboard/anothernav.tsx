export default function Anothernav() {
    const navLinks = ['Home', 'About', 'Contact'];

    return (
        <nav className="bg-blue-500 flex justify-end font-bold">
            <ul className="flex flex-row gap-2 mr-10">
                {navLinks.map((link) => {
                    return <li className="text-white p-5 cursor-pointer">{link}</li>
                })}
            </ul>
        </nav>
    )
}