export default function Nav({image}){
    return(
        <header>
            <div className="flex">
                <a>
                    <img className="h-20" src={`${image}`} alt="Sunset Roofing logo’s"/>
                </a>
            </div>
            <nav>
                <ul className="flex flex-col sm:flex-row">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}