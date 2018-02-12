import templateUrl from './home.component.html';
import ProviderActions from '../../actions/provider.actions.js';

const homeComponent = {
	bindings: {
		title: '<',
		data: '<'
	},
	templateUrl,
	controller: ['$ngRedux', class HomeComponent {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
			
			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,ProviderActions)(this);
		}

		$onInit() {
			//console.log('HomeComponent',this.data);
			this.provider = this.data;			
		}

		$onDestroy() {
			this.unsubscribe();
		}

		mapToStateThis(state) {
			
			console.log('mapToStateThis HomeComponent state',state);
			return {
				provider: state.provider
			}
		}
	}]
}

export default homeComponent;