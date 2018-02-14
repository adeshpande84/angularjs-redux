import templateUrl from './home.component.html';
import ProviderActions from '../../actions/provider.actions.js';
import AddressListActions from '../../actions/address-list.actions.js';
import InfoActions from '../../actions/info.actions.js';

import assign from 'lodash.assign';

const homeComponent = {
	bindings: {
		title: '<',
		data: '<'
	},
	templateUrl,
	controller: ['$ngRedux', class HomeComponent {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
			var actions = assign({},ProviderActions,AddressListActions,InfoActions);
			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,actions)(this);
		}

		$onInit() {
			//console.log('HomeComponent',this.data);
			this.provider = this.data.present;
			this.providerPrevious = this.data.previous;			
		}

		rollback() {
			console.log('homeComponent rollback');
			//this.rollbackProvider({providerPrevious: this.providerPrevious});
			//this.provider = cloneDeep(this.providerPrevious);
			this.rollbackInfo(this.providerPrevious.info);
			this.rollbackAddressList(this.providerPrevious.addressList);

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