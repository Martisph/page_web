export default function Foot({image}){
    return(
        <footer>
            <div>
                <div>
                    <div>
                        <img src={`${image}`} alt="Sunset Roofing orange logo’s"/>
                    </div>
                    <div>
                        <h3>Sunset Roofing And Gutters Services</h3>
                        <p>At Sunset Roofing and Gutters Services, our history is the story of your trust in us. We look forward to continuing to be your top choice for all your roofing and gutters needs in the future</p>
                    </div>
                    <div>
                        <h3>Contact us</h3>
                        <ul>
                            <li><a href="#">410-739-3213</a></li>
                            <li><a href="#">Oppening hours: Mon-Fri 7am-5pm, Sat 8am-12pm</a></li>
                            <li><a href="#">Emergency only: 443540934</a></li>
                        </ul>
                    </div>
                </div>
            <hr/>
            <p>
            Developed by <a href="">Desarrollalab.com</a>
            </p>
            </div>
        </footer>
    )
}