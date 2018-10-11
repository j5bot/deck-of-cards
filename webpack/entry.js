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

const getJSON = (r) => r.json();
const renderApp = (results) => render(
  <App results={results} config={config}/>,
  document.getElementById('test-report')
);

const cdn = 'https://gitcdn.link/repo/j5bot/deck-of-cards/master';
const local = '/assets';
const report = '/reports/js-test-results.json';

const cdnReport = `${cdn}${report}`;
const localReport = `${local}${report}`;

const fetchHandledJSON = ({ urls, index=0 }) => {
  return fetch(urls[index])
    .then(
      (r) => {
        return r.ok ?
          r.json() :
            Promise.reject({
              status: r.status,
              data: r.json()
            });
      }
    )
    .catch(
      (error) => {
        return index < urls.length ? fetchHandledJSON({
          urls,
          index: index++
        }) : Promise.reject(
          error
        );
      }
    );
};

fetchHandledJSON({
    urls: [
      cdnReport,
      localReport
    ]
  })
  .then(renderApp);
