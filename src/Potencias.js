var Potencias = {

	elevar: function(a, n) {

		if (n === 0) {
			return 1;
		} else if (n === 1) {
			return a;
		}

		return a * a * Potencias.elevar(a, n - 2);
	}
}
