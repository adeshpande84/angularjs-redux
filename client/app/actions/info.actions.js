function acceptStagingInfo(infoObj) {
	return {
		type: 'ACCEPT_INFO_STAGING',
		payload: infoObj
	}
}

function rollbackInfo(infoObj) {
	return {
		type: 'ROLLBACK_INFO',
		payload: infoObj
	}
}

function infoValueChanged() {
	return {
		type: 'INFO_VALUE_CHANGED',
		payload: {}
	}
}

export default {acceptStagingInfo,rollbackInfo,infoValueChanged};