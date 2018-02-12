function saveProvider(provider) {
	return {
		type: 'SAVE',
		payload: provider
	}
}

function rollbackProvider(provider) {
	return {
		type: 'ROLLBACK',
		payload: provider
	}
}

export default {saveProvider,rollbackProvider};