import Header from "./components/Header/Header";
import Sort from "./components/Sorts/Sort";
import Categories from "./components/Categories/Categories";
import Card from "./components/Card/Card";

function App() {
    return (
        <div>
            <div className='block max-w-[1340px] w-full h-[100vh] rounded-xl mx-auto bg-white shadow-Container'>
                <Header/>
                <div className='flex flex-wrap gap-4 justify-center px-6 py-10 border-b-2 border-b-myGrey flex md:px-16 md:justify-between'>
                    <Categories/>
                    <Sort/>
                </div>
                <div className='flex flex-wrap gap-10 p-16'>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
