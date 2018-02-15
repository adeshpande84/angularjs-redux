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
			
			var self = this;
			this.mapToStateThis = function(state) {
				
				return {
					info: state.info
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,InfoActions)(this);
		}

		$onInit() {
						
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