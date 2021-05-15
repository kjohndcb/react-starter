const { toPascalCase } = require('../../utils');

module.exports = {
  prompt: ({ prompter }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
        format: (componentName) => toPascalCase(componentName),
        validate: (f) => !!f || 'Required',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Directory (default "components"):',
      },
      {
        type: 'confirm',
        name: 'isTestIncluded',
        message: 'Include test file?',
      },
      {
        type: 'confirm',
        name: 'hasPropTypes',
        message: 'Has prop-types?',
      },
    ];

    return prompter.prompt(questions).then((answers) => {
      const { componentName, dir } = answers;
      const path = `${dir ? `${dir}/` : 'components/'}${componentName}`;
      const absPath = `src/${path}`;
      return { ...answers, path, absPath };
    });
  },
};
