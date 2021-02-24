module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
        validate: (f) => !!f || 'Required',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (Optional)',
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

    return inquirer.prompt(questions).then((answers) => {
      const { componentName, dir } = answers;
      const path = `${dir ? `${dir}/` : 'components/'}${componentName}`;
      const absPath = `src/${path}`;
      return { ...answers, path, absPath };
    });
  },
};
