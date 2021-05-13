const { execSync } = require('child_process');
const { readdirSync } = require('fs');
const { prompt } = require('enquirer');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const directories = getDirectories(`${__dirname}/generator`);

prompt({
  name: 'type',
  type: 'select',
  message: 'What do you want to generate?',
  choices: directories,
  initial: 'component',
}).then(({ type }) => {
  execSync(`npx hygen generator ${type}`, { stdio: 'inherit' });
});
