const Command = require('../ember-cli/lib/models/command');

export interface Xi18nOptions {
  outputPath?: string;
  verbose?: boolean;
  i18nFormat?: string;
}

const Xi18nCommand = Command.extend({
  name: 'xi18n',
  description: 'Extracts i18n messages from source code.',
  works: 'insideProject',
  availableOptions: [
    {
      name: 'i18n-format',
      type: String,
      default: 'xlf',
      aliases: ['f', {'xmb': 'xmb'}, {'xlf': 'xlf'}, {'xliff': 'xlf'}]
    },
    {
      name: 'output-path',
      type: 'Path',
      default: null,
      aliases: ['op'],
      description: 'Path where output will be placed.'
    },
    {
      name: 'verbose',
      type: Boolean,
      default: false,
      description: 'Adds more details to output logging.'
    },
    {
      name: 'progress',
      type: Boolean,
      default: true,
      description: 'Log progress to the console while running.'
    },
    {
      name: 'app',
      type: String,
      aliases: ['a'],
      description: 'Specifies app name to use.'
    }
  ],
  run: function (commandOptions: any) {
    const {Extracti18nTask} = require('../tasks/extract-i18n');

    const xi18nTask = new Extracti18nTask({
      ui: this.ui,
      project: this.project
    });

    return xi18nTask.run(commandOptions);
  }
});


export default Xi18nCommand;

