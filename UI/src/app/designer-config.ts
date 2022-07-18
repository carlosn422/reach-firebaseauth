import {DesignerConfigOption} from 'ngx-formly-designer';

export const designerConfig: DesignerConfigOption = {
  types: [
    {
      name: 'checkbox',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'defaultValue',
          type: 'checkbox',
          templateOptions: {
            label: 'default value'
          }
        }
      ]
    },
  ],
  wrappers: [
    {
      name: 'expander',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'templateOptions.expanded',
          type: 'checkbox',
          templateOptions: {
            label: 'expanded'
          },
          defaultValue: true
        }
      ]
    },
  ]
};