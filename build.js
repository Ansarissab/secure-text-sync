const { exec } = require('child_process');

exec('terser secureTextApp.js -o secureTextApp.min.js --compress --mangle', (err) => {
  if (err) return console.error('Minification error:', err);
  exec('javascript-obfuscator secureTextApp.min.js --output secureTextApp.obf.js', (err2) => {
    if (err2) return console.error('Obfuscation error:', err2);
    console.log('Build complete: secureTextApp.obf.js');
  });
});
