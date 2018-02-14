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

export default {acceptStagingInfo,rollbackInfo};