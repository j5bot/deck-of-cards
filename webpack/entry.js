import React from 'react';
import {render} from 'react-dom';

import {App} from '../assets/scripts/test-reporter.js';

let config = {
  id: 'title',
  ids: 'titles',
  sourceSet: 'assertionResults',
  targetSet: 'tests',
  ancestors: 'ancestorTitles'
};

fetch('https://gitcdn.link/repo/j5bot/deck-of-cards/master/reports/js-test-results.json').then(function (r) {
  return r.json();
}).then(function (results) {
  return render(<App results={results} config={config} />, document.getElementById('test-report'));
});
