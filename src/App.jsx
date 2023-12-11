import { Suspense } from 'react';
import CountryList from './components/CountryList';
import Time from './components/Time';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Country List with Time - Suspense & Error Boundaries</h2>
      <ErrorBoundary fallback={<div> Error while loading time...</div>}>
        <Suspense fallback={<div> Loading Time... </div>}>
          <Time/>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div> Error while loading country list...</div>}>
        <Suspense fallback={<div> Loading Country List... </div>}>
          <CountryList/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
