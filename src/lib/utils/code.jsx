const SNIPPETS = [
  'const factorial = number => {\n' +
    '\tlet product = 1;\n' +
    '\tfor (let i = 2; i <= number; i++) {\n' +
    '\tproduct *= i;\n' +
    '\t}\n' +
    '\treturn product;\n' +
    '};',
  'const factorial = number => {\n' + '\treturn number < 2 ? 1 : number * factorial(number - 1);\n' + '};',
];

export const getRandomCodeSnippet = () => {
  return SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
};
