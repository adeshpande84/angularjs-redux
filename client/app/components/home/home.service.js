import cloneDeep from 'lodash.clonedeep';

var homeService = class homeService {

	constructor() {

	}

	getTitle() {
		return 'Home Component';


	}

	getProvider() {

		return new Promise(function(resolve,reject) {
			var present = JSON.parse('{"summary":{"PROV_ID":"219406","HAS_CHANGED":"1","CHANGE_TYPE":"update","PENDING_CHANGES":"1"},"info":{"PROV_ID":"219406","HAS_CHANGED":"1","CHANGE_TYPE":"update","staging":{"PROV_ID":"219406","PROV_NPI":"1881684678","PROV_NAME":"Ritz, Nicholas B.","PROV_FIRST_NAME":"Nicholas","PROV_LAST_NAME":"Ritz","PROV_MID_INIT":"B","PROV_ENTITY":"P","PROV_TITLE":" ","STATUS":"update"},"master":{"PROV_ID":"219406","PROV_NPI":"123123","PROV_NAME":"test1 name master","PROV_FIRST_NAME":"test1","PROV_LAST_NAME":"master","PROV_MID_INIT":"n","PROV_ENTITY":"P","PROV_TITLE":"MD","STATUS":"Active"}},"addressList":[{"ADDR_ID":"37212","HAS_CHANGED":"1","CHANGE_TYPE":"update","staging":{"ADDR_ID":"37212","PRAD_ADDR1":"5757 Harper Dr Ne","PRAD_ADDR2":" ","PRAD_ADDR3":"Eye Associates Of New Mexico Optical","PRAD_CITY":"Albuquerqueerqueuquerque","PRAD_STATE":"NM","PRAD_ZIP":"87109","STATUS":"update"},"master":{"ADDR_ID":"37212","PRAD_ADDR1":"5756 Harper Dr Ne","PRAD_ADDR2":" ","PRAD_ADDR3":"Eye Associates Of New Mexico Optical","PRAD_CITY":"Albuquerqueerqueuquerque","PRAD_STATE":"NM","PRAD_ZIP":"87109","STATUS":"Active"}},{"ADDR_ID":"39552","HAS_CHANGED":"1","CHANGE_TYPE":"update","staging":{"ADDR_ID":"39552","PRAD_ADDR1":"5200 Eubank Blvd Ne","PRAD_ADDR2":"Ste A4","PRAD_ADDR3":"Eye Associates Of New Mexico Optical","PRAD_CITY":"Albuquerqueerqueuquerque","PRAD_STATE":"NM","PRAD_ZIP":"87111","STATUS":"update"},"master":{"ADDR_ID":"39552","PRAD_ADDR1":"test addr1","PRAD_ADDR2":"test addr2","PRAD_ADDR3":"test addr3","PRAD_CITY":"test city","PRAD_STATE":"test state","PRAD_ZIP":"12345","STATUS":"Active"}},{"ADDR_ID":"39553","HAS_CHANGED":"0","CHANGE_TYPE":"nochange","staging":{"ADDR_ID":"39553","PRAD_ADDR1":"1111 test","PRAD_ADDR2":"Ste A4","PRAD_ADDR3":"","PRAD_CITY":"test","PRAD_STATE":"NM","PRAD_ZIP":"87110","STATUS":"nochange"},"master":{"ADDR_ID":"39553","PRAD_ADDR1":"1111 test","PRAD_ADDR2":"Ste A4","PRAD_ADDR3":"","PRAD_CITY":"test","PRAD_STATE":"NM","PRAD_ZIP":"87110","STATUS":"Active"}}]}');
			var previous = cloneDeep(present);
			resolve({present: present, previous: previous});
		});

		//return ;
	}
}

export default homeService;