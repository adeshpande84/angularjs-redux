import templateUrl from './home.component.html';

const homeComponent = {
	bindings: {
		title: '<',
		data: '<'
	},
	templateUrl,
	controller: class HomeComponent {
		constructor() {
			
		}

		$onInit() {
			console.log('HomeComponent',this.data);
			this.provider = this.data;			
		}

		
	}
}

export default homeComponent;