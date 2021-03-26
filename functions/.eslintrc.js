module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	standard: {
		parser: "babel-eslint",
	},
	extends: "eslint:recommended",
	rules: {
		quotes: ["error", "double"],
	},
};
