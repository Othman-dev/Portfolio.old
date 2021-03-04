import React, {
		createContext,
		useReducer
} from 'react';
import MainReducer from './mainReducer.js';


export const MainContext = createContext();


const MainContextProvider = (props) => {

		const [main, dispatch] = useReducer(MainReducer, {
				music: false,
				lang: false,
		});

return(
		<MainContext.Provider value={{main, dispatch}}>
				{props.children}
		</MainContext.Provider>
)};

export default MainContextProvider;
