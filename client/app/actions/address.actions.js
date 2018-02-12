function acceptStagingAddress(addressObj) {
	return {
		type: 'ACCEPT_STAGING',
		payload: addressObj
	}
}

export default {acceptStagingAddress};