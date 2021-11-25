function noop() {}

function returnPromiseWithThenRegistered(shouldResolve) {
	
	var p = new Promise((resolve, reject) => {
		if(shouldResolve) return resolve(shouldResolve)
		else reject(shouldResolve)
	});

	p.then(noop);

	return p;
}



module.exports = returnPromiseWithThenRegistered
