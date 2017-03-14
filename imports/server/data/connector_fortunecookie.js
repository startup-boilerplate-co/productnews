import rp from 'request-promise';

const FortuneCookie = {
	getOne() {
		return rp('http://swapi.co/api/people/1/')
			.then((res) => JSON.parse(res))
			.then((res) => res.name);
	}
};

export default FortuneCookie;
