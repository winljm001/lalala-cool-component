import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'lalala-cool-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    {
      type: 'docs-custom',
      generator: () => {
        return;
      },
    },
  ],
};
