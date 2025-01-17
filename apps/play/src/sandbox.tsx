import React from 'react';
import ReactDOM from 'react-dom';
import * as emotionReact from '@emotion/react';
import * as motion from 'motion';
import * as empanada from 'empanada';
import { setupSandbox } from 'noxtron/build/sandbox';

import * as tools from '@arwes/tools';
import * as animator from '@arwes/animator';
import * as animated from '@arwes/animated';

setupSandbox({
  dependencies: [
    { name: 'react', pkg: React },
    { name: 'react-dom', pkg: ReactDOM },
    { name: '@emotion/react', pkg: emotionReact },
    { name: 'motion', pkg: motion },
    { name: 'empanada', pkg: empanada },
    { name: '@arwes/tools', pkg: tools },
    { name: '@arwes/animator', pkg: animator },
    { name: '@arwes/animated', pkg: animated }
  ]
});
