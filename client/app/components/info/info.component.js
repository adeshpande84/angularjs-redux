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
				console.log('mapToStateThis InfoComponent',state);
				return {
					info: state.info
				}
			};

			this.unsubscribe = this.$ngRedux.connect(this.mapToStateThis,InfoActions)(this);
		}

		$onInit() {
						
		}
		
		accept() {
			this.acceptStagingInfo({info: this.info});
			
		}

		rollback() {
			console.log('infoComponent rollback');
			this.rollbackInfo(this.infoPrevious);
		}

		$onDestroy() {
			this.unsubscribe();
		}
	
	}]
}

export default infoComponent;