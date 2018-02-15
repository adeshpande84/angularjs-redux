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
			
			var self = this;
			this.mapToStateThis = function(state) {
				console.log('mapToStateThis AddressComponent cns',state,self.addressIndex);
				return {
					address: state.provider.addressList[self.addressIndex]
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,AddressActions)(this);
		}

		$onInit() {
						
		}

		valueChanged() {
			console.log('address value changed');
			this.addressValueChanged(this.addressIndex);
		}

		accept() {
			//console.log('addressComponent accept',this.address);

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