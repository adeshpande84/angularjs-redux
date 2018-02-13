function rollbackAddressList(addressList) {
	return {
		type: 'ROLLBACK_ADDRESSLIST',
		payload: addressList
	}
}

export default {rollbackAddressList};