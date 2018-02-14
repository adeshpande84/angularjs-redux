function saveProvider(provider) {
	return {
		type: 'SAVE_PROVIDER',
		payload: provider
	}
}

function rollbackProvider(providerPrevious) {
	return {
		type: 'ROLLBACK_PROVIDER',
		payload: providerPrevious
	}
}

export default {saveProvider,rollbackProvider};