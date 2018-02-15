import templateUrl from './info.component.html';
import InfoActions from '../../actions/info.actions.js';

const infoComponent = {
	bindings: {
		info: '<',
		infoPrevious: '<',
				
	},
	templateUrl,
	controller: ['$ngRedux', class InfoComponent {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
					
		}

		$onInit() {
			var self = this;
			this.mapToStateThis = function(state) {
				
				var info = state.provider.info;
				self.showStaging = info.staging.STATUS.toLowerCase() != 'processed' && info.staging.STATUS.toLowerCase() != 'nochange';
				self.masterFieldsDisabled = parseInt(info.HAS_CHANGED) == 1 && (!info.ACTION_TAKEN_ON_STAGING);
				self.showRollback = parseInt(info.ACTION_TAKEN_ON_STAGING) == 1 || parseInt(info.ACTION_TAKEN_ON_MASTER) == 1;

				//console.log(state.provider.info.HAS_CHANGED,state.provider.info.ACTION_TAKEN_ON_STAGING);

				return {
					info: info
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,InfoActions)(this);			
		}
		
		valueChanged() {
			
			this.infoValueChanged();
		}

		accept() {
			this.acceptStagingInfo({info: this.info});
			
		}

		reject() {
			this.rejectStagingInfo({info: this.info});
		}

		rollback() {
			
			this.rollbackInfo(this.infoPrevious);
		}

		$onDestroy() {
			this.unsubscribe();
		}
	
	}]
}

export default infoComponent;