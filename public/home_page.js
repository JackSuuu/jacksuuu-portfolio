// Define your components here

function App() {
    return (
        <section>
            <div class="flex justify-between items-center p-7 text-white">
                <button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">@ code by Jack</button> 
                <ul class="flex justify-between item-center p-3 gap-x-3 border border-3.5 rounded-lg">
                    <li><button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">Intro</button></li>
                    <li><button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">Work</button></li>
                    <li><button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">Contact</button></li>
                </ul>
            </div>
            <div class="p-10 text-white">
                <div class="relative">
                    <h2 class="absolute top-5 left-5 text-white">
                        Computer Science Student &
                    </h2>
                    <h2 class="absolute top-11 left-5 text-white">
                        Developer, Designer
                    </h2>
                    <img src="assets/home_page_bg.gif" loop></img>
                    <h1 class="text-8xl mt-2 absolute top-80 font-inter">
                    JACK SU
                    </h1>
                    <div class="text-sm text-[#DBDBDB] absolute mt-20 top-100 font-inter flex justify-between">
                        <span>Design-driven programming</span>
                        <span>Artificial Intelligence</span>
                        <span>Detail-oriented</span>
                        <span>Spiritual Believer</span>
                        <span>Growth Mindest</span>
                    </div>
                </div>
            </div>
        </section>

    );
}

ReactDOM.render(<App />, document.querySelector('#home-page'));