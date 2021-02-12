import React, { Suspense } from 'react';

const Personal = React.lazy(() => import('./Personal'));

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Personal />
    </Suspense>
  );
}

export default App;
