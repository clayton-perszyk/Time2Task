import requireHacker from 'require-hacker'
requireHacker.hook('mp3', () => 'module.exports = ""')
requireHacker.hook('css', () => 'module.exports = ""')
