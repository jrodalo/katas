describe("Potencias.elevar", function() {

	it("devuelve uno con cualquier número elevado a cero", function() {

		expect( Potencias.elevar(2, 0) ).toBe(1);

	});

	it("devuelve el mismo número al elevarlo a uno", function() {

		expect( Potencias.elevar(2, 1) ).toBe(2);

	});

	it("devuelve el primer parámetro multiplicado por sí mismo tantas veces diga el segundo", function() {

		expect( Potencias.elevar(2, 3) ).toBe(8);
		expect( Potencias.elevar(3, 4) ).toBe(81);

	});

	it("devuelve el inverso del número elevado al exponente positivo cuando el segundo parámetro sea negativo", function() {

		expect( Potencias.elevar(3, -2) ).toBe( 1 / Potencias.elevar(3, 2) );

	});

});
