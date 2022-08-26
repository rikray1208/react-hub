import logo from './assets/headerImg/logo.png';

function App() {
  return (
    <div>
      <div className='block max-w-[1340px] w-full h-[100vh] rounded-xl mx-auto my-16 px-16 bg-white shadow-Container'>
          <header>
              <img src={logo} alt='logo'/>
              <div>
                  <h3>recipes REACT HUB</h3>
                  <p>Хаб рецептов</p>
              </div>
          </header>

      </div>
    </div>
  );
}

export default App;
