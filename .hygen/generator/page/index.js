const { toPascalCase } = require('../../utils');

module.exports = {
  prompt: ({ prompter }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'Page name:',
        format: (componentName) => toPascalCase(componentName),
        result: (componentName) => toPascalCase(componentName),
        validate: (f) => !!f || 'Required',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Directory (default "pages"):',
      },
      {
        type: 'confirm',
        name: 'isTestIncluded',
        message: 'Include test file?',
      },
    ];

    return prompter.prompt(questions).then((answers) => {
      const { componentName, dir } = answers;
      const path = `${dir ? `${dir}/` : 'pages/'}${componentName}`;
      const absPath = `src/${path}`;
      return { ...answers, path, absPath };
    });
  },
};
