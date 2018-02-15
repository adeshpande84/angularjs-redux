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

function rollbackAddressList(addressList) {
	return {
		type: 'ROLLBACK_ADDRESSLIST',
		payload: addressList
	}
}

function addressValueChanged(addressIndex) {
	return {
		type: 'ADDRESS_VALUE_CHANGED',
		payload: addressIndex
	}
}

export default {acceptStagingAddress,rollbackAddress,rollbackAddressList,addressValueChanged};