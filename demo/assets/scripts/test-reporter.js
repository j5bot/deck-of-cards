import React from 'react';
import {createHierarchy} from './create-hierarchy.js';

export const basename = path => path.split(
  (path.indexOf('__tests__') < 0) ? '/' : '__tests__'
).pop();

export const StatusIcon = ({status}) => <i>{status === 'passed' ? '✔' : '✘'}</i>;

export const Spec = ({result}) => {

  return (<div className={'Result ' + result.status}>
    <h2>
      <StatusIcon status={result.status} />
      {basename(result.name)}
    </h2>
      { result.summary && (<h3>{result.summary}</h3>) }
      <NestedResults test={result}/>
    </div>);
};

export const NestedResult = ({assertion}) => {
  return (
    <div className={'assertion ' + assertion.status}>
      <StatusIcon status={assertion.status} />
      <span className="assertion-title">{assertion.title}</span>
      { assertion.failureMessages && assertion.failureMessages.map(msg => (
        <pre>{msg}</pre>
      )) }
    </div>
  );
};

export const ResultGroup = ({group}) => (
  <div className="resultGroup">
    <span>{group.title}</span>
    { group.tests.map( (test,i) => <NestedResults test={test} key={i}/> ) }
  </div>
);

export const NestedResults = ({test}) => {
  return test && (
    (test.tests && test.tests.length > 0) ?
      (<ResultGroup group={test}/>) :
        (<NestedResult assertion={test}/>)
      ) || null;

  return elements;
};

export const Header = ({results}) => (
  <header>
    {results.numFailedTestSuites !== 'undefined' && <div title={`${results.numFailedTestSuites} failing suites`} className='metric failed'>{results.numFailedTestSuites}</div>}
    {results.numPassedTestSuites !== 'undefined' && <div title={`${results.numPassedTestSuites} passing suites`} className='metric passed'>{results.numPassedTestSuites}</div>}
  </header>
);

export const App = ({results, config}) => (
  <div>
    <Header results={results} />
    <div>
      {
        results.testResults
          .sort((a, b) => {
            return a.name === b.name ? 0 : (a.name < b.name ? -1 : 1)
          })
          .map((result, i) => {
            const root = createHierarchy(result, config).tests[0];
            root.name = result.name;
            root.summary = result.summary;
            root.status = result.status;

            return (
              <Spec result={root} key={i} />
            );
          })
      }
    </div>
  </div>
);
