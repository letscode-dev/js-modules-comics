class NativeDOM {
	createElement(type, attr, children, eventListener) {
		// type
		const element = document.createElement(type);
		
		// attr
		if (attr) {
			for(let key in attr) {
				element.setAttribute(key, attr[key]);
			}	
		}
		
		// children
		if (children) {
			element.innerHTML = children; 
		}
		
		// eventListener
		if (eventListener) {
			if (eventListener.params) {
				element.addEventListener(eventListener.action, eventListener.listener.bind(null, ...eventListener.params));
			} else {
				element.addEventListener(eventListener.action, eventListener.listener);
			}
		}

		return element;
	}
}

export const nativeDOM = new NativeDOM();

// USED
// const element = nativeDOM.createElement('div', {
//     'title': 'Hello',
//     'class': 'starter',
//     'style': "background-color: yellowgreen; font-size: 25px;",
//     'width': '200px',
//     'height': '200px',
// },
// 'Content',
// {
//     action: 'click',
//     listener: function(arg1, arg2, event) {
//         console.log('event', event);
//         console.log('arg1', arg1);
//         console.log('arg2', arg2);
//     },
//     params: ['Hello', 'World'],
// });
