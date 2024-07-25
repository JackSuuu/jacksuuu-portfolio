// Define your components here

function App() {

    return (
        <section className="mb-10">
            <div class="flex justify-between items-center p-7 text-white">
                <button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">@ code by Jack</button> 
                <ul class="flex justify-between item-center p-3 gap-x-3 border border-3.5 rounded-lg">
                    <li><a href="#intro-page" class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">Work</a></li>
                    <li><button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">About</button></li>
                    <li><button class="transition duration-300 ease-in-out hover:text-[#DBDBDB]">Contact</button></li>
                </ul>
            </div>
            <div class="p-10 text-white flex flex-col items-center justify-center text-foreground">
                <div class="relative">
                    <h2 class="absolute top-5 left-5 text-white">
                        Computer Science Student &
                    </h2>
                    <h2 class="absolute top-11 left-5 text-white">
                        Developer, Designer
                    </h2>
                    <img src="assets/home_page_bg.gif" loop class="max-h-[500px]"></img>
                    <h1 className={`text-8xl mt-10 absolute left-[30px] bottom-[-40px]`}>
                        JACK SU
                    </h1>
                    <div class="flex justify-between gap-x-6 text-m text-[#DBDBDB] absolute mt-15 bottom-[-93px] font-inter">
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