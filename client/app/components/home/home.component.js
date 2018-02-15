import templateUrl from './home.component.html';
import ProviderActions from '../../actions/provider.actions.js';
import AddressActions from '../../actions/address.actions.js';
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
			var actions = assign({},ProviderActions,AddressActions,InfoActions);

			var self = this;
			this.mapToStateThis = function(state) {
				console.log('mapToStateThis HomeComponent state',state);
				//self.showSave = false;

				self.showSave = self.canShowSave(state.provider);
				self.showRollback = self.canShowRollback(state.provider);

				return {
					provider: state.provider
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,actions)(this);
		}

		$onInit() {
			console.log('HomeComponent',this.data);
			this.provider = this.data.present;
			this.providerPrevious = this.data.previous;			
		}

		canShowSave(provider) {
			var result = true;
			if(typeof provider.info.ACTION_TAKEN_ON_MASTER != 'undefined' && provider.info.ACTION_TAKEN_ON_MASTER == 1) {
				result = result && true;

			} else {
				result = result && false;
				return result;
			}

			//iterate through address list to check ACTION_TAKEN_ON_MASTER 

			//...check all other elements in provider

			return result;
		}

		canShowRollback(provider) {
			var result = false;
			if(provider.info.ACTION_TAKEN_ON_STAGING == 1 || provider.info.ACTION_TAKEN_ON_MASTER == 1) {

				result = result || true;

			}
			return result;
		}

		rollback() {
						
			this.rollbackInfo(this.providerPrevious.info);
			this.rollbackAddressList(this.providerPrevious.addressList);

		}

		save() {
			console.log('Sending data to API for saving: ');
			console.log(this.provider);
		}

		$onDestroy() {
			this.unsubscribe();
		}

		
	}]
}

export default homeComponent;