import Header from "./components/Header/Header";
import Sort from "./components/Sorts/Sort";
import Categories from "./components/Categories/Categories";
import Card from "./components/Card/Card";
import {useFetch} from "./hooks/useFetch";
import axios from "axios";
import {recipesRequestUrl} from "./utils/api";

function App() {
    const [recipes, isLoading, error] = useFetch(() => {
        return axios.get(recipesRequestUrl);
    })
    if (isLoading) return <h1>loading</h1>
    return (
        <div>
            <div className='block max-w-[1340px] w-full min-h-[100vh] rounded-xl mx-auto bg-white shadow-Container'>
                <Header/>
                <div className='flex flex-wrap gap-4 justify-center px-6 py-10 border-b-2 border-b-myGrey flex md:px-16 md:justify-between'>
                    <Categories/>
                    <Sort/>
                </div>
                <div className='grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4'>
                    {recipes.map(el =>
                        <Card key={el.id} {...el}/>
                    )}
                </div>
            </div>
        </div>
    );
}
//flex flex-wrap gap-10 p-16'
export default App;
