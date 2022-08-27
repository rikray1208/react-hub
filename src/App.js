import Header from "./components/Header/Header";
import Sort from "./components/Sorts/Sort";

function App() {
    return (
        <div>
            <div className='block max-w-[1340px] w-full h-[100vh] rounded-xl mx-auto bg-white shadow-Container'>
                <Header/>
                <div className='flex flex-wrap gap-4 justify-center px-6 py-10 border-b-2 border-b-myGrey flex md:px-16 md:justify-between'>
                    <div className='max-w-[510px] w-max overflow-auto'>
                        <ul className='flex gap-x-3'>
                            <li className='block text-base font-bold px-6 py-2 text-white bg-myOrange rounded-[30px]'>Все</li>
                            <li className='block text-base font-bold px-6 py-2  bg-myGrey rounded-[30px]'>Десерты</li>
                            <li className='block text-base font-bold px-6 py-2  bg-myGrey rounded-[30px]'>Салаты</li>
                            <li className='block text-base font-bold px-6 py-2  bg-myGrey rounded-[30px]'>ПП</li>
                            <li className='block text-base font-bold px-6 py-2  bg-myGrey rounded-[30px]'>Мясо</li>
                        </ul>
                    </div>
                    <Sort/>
                </div>
            </div>
        </div>
    );
}

export default App;
