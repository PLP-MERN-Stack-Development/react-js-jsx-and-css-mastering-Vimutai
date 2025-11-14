const { build } = require('vite');

build()
  .then(() => {
    console.log('Vite build completed (build.cjs).');
    process.exit(0);
  })
  .catch(err => {
    console.error('Vite build failed (build.cjs):', err);
    process.exit(1);
  });
