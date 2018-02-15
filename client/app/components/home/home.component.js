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
				
				self.showSave = self.canShowSave(state.provider);
				self.showRollback = self.canShowRollback(state.provider);

				return {
					provider: state.provider
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,actions)(this);
		}

		$onInit() {
			
			this.provider = this.data.present;
			this.providerPrevious = this.data.previous;			
		}
		
		getObjectsChangedinStaging(provider) {
			var info = provider.info;
			var addressList = provider.addressList;

			var tempArray = [];
			
			if(this.checkObjectChangedinStaging(info)) {
				tempArray.push(info);
			}

			tempArray = tempArray.concat(this.getChangedObjectsInArrayInStaging(addressList));

			return tempArray;
		}



		checkObjectChangedinStaging(obj) {
			return typeof obj.HAS_CHANGED != 'undefined' && parseInt(obj.HAS_CHANGED) == 1;
		}

		getChangedObjectsInArrayInStaging(items) {
			var result = [];

			for(var i=0; i<items.length; i++) {
				var item = items[i];

				if(this.checkObjectChangedinStaging(item)) {
					result.push(item);
				}
				
			}

			return result;
		}

		checkObjectChangedinMaster(obj) {
			return typeof obj.ACTION_TAKEN_ON_MASTER != 'undefined' && parseInt(obj.ACTION_TAKEN_ON_MASTER) == 1;
		}

		getChangedObjectsInArrayInMaster(items) {
			var result = [];

			for(var i=0; i<items.length; i++) {
				var item = items[i];

				if(this.checkObjectChangedinMaster(item)) {
					result.push(item);
				}
				
			}

			return result;
		}

		getObjectsChangedinMaster(provider) {
			var info = provider.info;
			var addressList = provider.addressList;

			var tempArray = [];

			//return tempArray.concat(this.getInfoObjectChangedInMaster(info),this.getAddressObjectsChangedInMaster(addressList));

			if(this.checkObjectChangedinMaster(info)) {
				tempArray.push(info);
			}

			tempArray = tempArray.concat(this.getChangedObjectsInArrayInMaster(addressList));

			return tempArray;
		}

		canShowSave(provider) {
			var result = true;
			
			if(parseInt(provider.summary.HAS_CHANGED) == 1) {

				var changedObjects = this.getObjectsChangedinStaging(provider);

				for(var i=0; i<changedObjects.length; i++) {
					var obj = changedObjects[i];

					if(typeof obj.ACTION_TAKEN_ON_STAGING == 'undefined' || parseInt(obj.ACTION_TAKEN_ON_STAGING) == 0) {
						//return false;
						result = false;
						break;
					}
				}

			} else {
				
				var changedObjects = this.getObjectsChangedinMaster(provider);

				if(changedObjects.length == 0) {
					result = false;
				}
			}

			return result;
		}

		canShowRollback(provider) {
			var result = false;
			if(provider.info.ACTION_TAKEN_ON_STAGING == 1 || provider.info.ACTION_TAKEN_ON_MASTER == 1) {

				result = result || true;

			}

			for(var i=0; i<provider.addressList.length; i++) {
				var address = provider.addressList[i];

				if(address.ACTION_TAKEN_ON_STAGING == 1 || address.ACTION_TAKEN_ON_MASTER == 1) {

					result = result || true;
					break;
				}

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