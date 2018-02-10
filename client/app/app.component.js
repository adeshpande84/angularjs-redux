import templateUrl from './app.component.html';

const AppComponent = {
	templateUrl,
	controller: [class AppComponent {
		constructor() {
			
		}

		$onInit() {
			
		}

		toggleSideNav() {
			this.showSideNav = !this.showSideNav
		}
	}]
}



export default AppComponent;