const MainReducer = (main, action) => {
		switch(action.type){
				case 'musicSwitch':
						return{
						...main, 'music': !main.music 
						};
				case 'themeSwitch':
						return{
						...main, 'lang': !main.lang
						};
				default:
						return main;
		};
};

export default MainReducer;
