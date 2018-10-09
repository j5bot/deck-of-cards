'use strict';

/* From https://codepen.io/konsumer/pen/ObKBWO */
var basename = function basename(path) {
  return path.split('/').pop();
};

var StatusIcon = function StatusIcon(_ref) {
  var status = _ref.status;
  return React.createElement(
    'i',
    null,
    status === 'passed' ? '✔' : '✘'
  );
};

var Result = function Result(_ref2) {
  var result = _ref2.result;
  return React.createElement(
    'div',
    { className: 'Result ' + result.status },
    React.createElement(
      'h2',
      null,
      basename(result.name)
    ),
    React.createElement(
      'h3',
      null,
      result.summary
    ),
    result.assertionResults.map(function (assertion) {
      return React.createElement(
        'div',
        { className: 'assertion ' + assertion.status },
        React.createElement(StatusIcon, { status: assertion.status }),
        ' ',
        assertion.title,
        assertion.failureMessages && assertion.failureMessages.map(function (msg) {
          return React.createElement(
            'pre',
            null,
            msg
          );
        })
      );
    })
  );
};

var Header = function Header(_ref3) {
  var results = _ref3.results;
  return React.createElement(
    'header',
    null,
    results.numFailedTestSuites && React.createElement(
      'div',
      { title: results.numFailedTestSuites + ' failing suites', className: 'metric failed' },
      results.numFailedTestSuites
    ),
    results.numPassedTestSuites && React.createElement(
      'div',
      { title: results.numPassedTestSuites + ' passing suites', className: 'metric passed' },
      results.numPassedTestSuites
    )
  );
};

var App = function App(_ref4) {
  var results = _ref4.results;
  return React.createElement(
    'div',
    null,
    React.createElement(Header, { results: results }),
    React.createElement(
      'div',
      null,
      results.testResults.map(function (result, i) {
        return React.createElement(Result, { result: result, key: i });
      })
    )
  );
};
