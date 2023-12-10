export const checarCampos = (...dados) => {
	let camposVazios = 0;

	dados.forEach((dado) => {
		if (
			dado === null ||
			dado === undefined ||
			dado === "" ||
			(typeof dado === "number" && isNaN(dado))
		) {
			camposVazios++;
		}
	});

	if (camposVazios > 0) {
		console.log("Campos inseridos incorretamente");
		return false;
	}

	return true;
};
