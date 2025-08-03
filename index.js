export default [
    {
        languageOptions: {
            globals: {
                MyGlobal: true,
            },
        },

        rules: {
            '@typescript-eslint/no-explicit-any': 1,
            '@typescript-eslint/no-unused-vars': 1,
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['PascalCase'],
                    prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
                },
                {
                    selector: 'enum',
                    format: ['PascalCase'],
                    suffix: ['Enum'],
                },
            ],

            'no-use-before-define': 'off', // Note: you must disable the base rule as it can report incorrect errors; use @typescript-eslint/no-use-before-define
        },
    },
];
