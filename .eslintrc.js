module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],

	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		// to enforce using type for object type definitions, can be type or interface
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/spaced-comment': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/keyword-spacing': [
			'warn',
			{ before: true, after: true },
		],
	},
};