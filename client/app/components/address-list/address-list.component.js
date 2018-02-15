import templateUrl from './address-list.component.html';
import AddressActions from '../../actions/address.actions.js';

const addressListComponent = {
	bindings: {
		addressList: '<',
		addressListPrevious: '<',
				
	},
	templateUrl,
	controller: ['$ngRedux', class AddressListComponent {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
			
			var self = this;
			this.mapToStateThis = function(state) {
				console.log('mapToStateThis AddressListComponent',state);
				
				self.showRollback = self.canShowRollback(state.provider.addressList);
				
				return {
					addressList: state.addressList
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,AddressActions)(this);
		}

		$onInit() {
						
		}

		
		canShowRollback(addressList) {
			console.log('canShowRollback',addressList);
			var result = false;

			for(var i=0; i<addressList.length; i++) {
				var address = addressList[i];

				if(address.ACTION_TAKEN_ON_STAGING == 1 || address.ACTION_TAKEN_ON_MASTER == 1) {

					result = result || true;
					break;
				}

			}

			console.log('canShowRollback',result);
			
			return result;
		}

		rollbackAllAddress() {
			console.log('addressListComponent rollbackAllAddress');
			this.rollbackAddressList(this.addressListPrevious);
		}

		$onDestroy() {
			this.unsubscribe();
		}
	
	}]
}

export default addressListComponent;