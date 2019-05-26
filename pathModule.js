const path = require('path');

console.log(`
${path.basename('d:\\usr\\kapil.ts')}
${path.dirname('d:\\usr\\kapil.ts')}
${path.parse('d:\\usr\\kapil.ts').toString()}
${path.format(path.parse('d:\\usr\\kapil.ts'))}
`)