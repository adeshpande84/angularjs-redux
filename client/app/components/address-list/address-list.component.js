import templateUrl from './address-list.component.html';
import AddressListActions from '../../actions/address-list.actions.js';

const addressListComponent = {
	bindings: {
		addressList: '<',
				
	},
	templateUrl,
	controller: ['$ngRedux', class AddressListComponent {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
			
			var self = this;
			this.mapToStateThis = function(state) {
				console.log('mapToStateThis AddressListComponent',state);
				return {
					addressList: state.addressList
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,AddressListActions)(this);
		}

		$onInit() {
						
		}

		rollbackAllAddress() {
			this.rollbackAddressList(this.addressList);
		}

		$onDestroy() {
			this.unsubscribe();
		}
	
	}]
}

export default addressListComponent;