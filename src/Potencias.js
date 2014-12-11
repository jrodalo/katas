var Potencias = {

	elevar: function(a, n) {

		if (n === 0) {
			return 1;
		} else if (n === 1) {
			return a;
		} else if (n < 0) {
			return 1 / Potencias.elevar(a, n * -1);
		}

		return a * a * Potencias.elevar(a, n - 2);
	}
}
