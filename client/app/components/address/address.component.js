import templateUrl from './address.component.html';
import AddressActions from '../../actions/address.actions.js';

const addressComponent = {
	bindings: {
		address: '<',
		addressIndex: '<',
		addressPrevious: '<'
		
	},
	templateUrl,
	controller: ['$ngRedux', class AddressComponent {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
			
			
		}

		$onInit() {
			
			var self = this;
			
			this.mapToStateThis = function(state) {
								
				var address = state.provider.addressList[self.addressIndex];
				
				self.showStaging = true;
								
				//if(typeof address != 'undefined') {
					self.showStaging = address.staging.STATUS.toLowerCase() != 'processed' && address.staging.STATUS.toLowerCase() != 'nochange';
				//}

				self.masterFieldsDisabled = parseInt(address.HAS_CHANGED) == 1 && (!address.ACTION_TAKEN_ON_STAGING);
				self.showRollback = parseInt(address.ACTION_TAKEN_ON_STAGING) == 1 || parseInt(address.ACTION_TAKEN_ON_MASTER) == 1;


				return {
					address: address
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,AddressActions)(this);			
		}

		valueChanged() {
			
			this.addressValueChanged({addressIndex: this.addressIndex});
		}

		accept() {
			
			this.acceptStagingAddress({addressIndex: this.addressIndex});
			
		}

		rollback() {
			
			this.rollbackAddress({addressIndex: this.addressIndex, addressPrevious: this.addressPrevious});
		}

		$onDestroy() {
			this.unsubscribe();
		}
	
	}]
}

export default addressComponent;