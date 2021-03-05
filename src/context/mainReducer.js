const MainReducer = (main, action) => {
		switch(action.type){
				case 'musicSwitch':
						return{
						...main, 'music': !main.music 
						};
				case 'frenchSwitch':
						return{
						...main, 'french': !main.french
						};
				case 'homePage':
						return{
						...main, 'page': 'home'
						};
				case 'skillsPage':
						return{
						...main, 'page': 'skills'
						};
				case 'contactPage':
						return{
						...main, 'page': 'contact'
						};
				case 'projectsPage':
						return{
						...main, 'page': 'projects'
						};
				case 'aboutPage':
						return{
						...main, 'page': 'about'
						};
				default:
						return main;
		};
};

export default MainReducer;
