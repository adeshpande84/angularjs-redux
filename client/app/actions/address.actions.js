function acceptStagingAddress(addressObj) {
	return {
		type: 'ACCEPT_ADDRESS_STAGING',
		payload: addressObj
	}
}

function rollbackAddress(addressIndex) {
	return {
		type: 'ROLLBACK_ADDRESS',
		payload: addressIndex
	}
}

export default {acceptStagingAddress,rollbackAddress};