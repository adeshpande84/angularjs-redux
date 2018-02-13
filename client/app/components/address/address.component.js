import templateUrl from './address.component.html';
import AddressActions from '../../actions/address.actions.js';

const addressComponent = {
	bindings: {
		address: '<',
		addressIndex: '<'
		
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

		accept() {
			this.acceptStagingAddress({addressIndex: this.addressIndex});
			
		}

		$onDestroy() {
			this.unsubscribe();
		}
	
	}]
}

export default addressComponent;