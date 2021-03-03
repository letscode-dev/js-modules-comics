import { nativeDOM } from '/utils/nativeDOM';
import Characters from '/components/Characters';
import './App.css'

const App = async () => {
	const wrapper = nativeDOM.createElement('div');
	const characters = await Characters();
	wrapper.appendChild(characters);
    return wrapper;
};

export default App;
