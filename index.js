import App from './components/App';

(async () => {
	const element = await App();
	const root = document.getElementById('root');
	root.appendChild(element);
})();
