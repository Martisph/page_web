export default function Foot({image}){
    return(
        <footer className="bg-black text-white">
            <div className="w-11/12 mx-auto box-border py-6">
                <div className="flex flex-col gap-5 mb-6 sm:flex-row">
                    <div className="sm:w-2/6 box-border pb-8">
                        <img className="max-w-64 mx-auto" src={`${image}`} alt="Sunset Roofing orange logo’s"/>
                    </div>
                    <div className="sm:w-2/6">
                        <h3 className="text-orange-600 text-2xl font-semibold mb-6">Sunset Roofing And Gutters Services</h3>
                        <p>At Sunset Roofing and Gutters Services, our history is the story of your trust in us. We look forward to continuing to be your top choice for all your roofing and gutters needs in the future</p>
                    </div>
                    <div className="sm:w-2/6">
                        <h3 className="text-orange-600 text-2xl font-semibold mb-6">Contact us</h3>
                        <ul>
                            <li className="my-4"><a className="hover:underline " href="#">410-739-3213</a></li>
                            <li className="my-4"><a className="hover:underline " href="#">Oppening hours: Mon-Fri 7am-5pm, Sat 8am-12pm</a></li>
                            <li className="my-4 text-center bg-orange-600 font-semibold text-lg"><a className="hover:underline block p-2 w-full" href="#">Emergency only: 443540934</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="mt-6 text-orange-600">
                Developed by <a href="">Desarrollalab.com</a>
                </p>
            </div>
        </footer>
    )
}