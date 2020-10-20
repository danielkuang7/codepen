import React from 'react';


function App() {
  return (
    <>
    <div className="pane top-pane"></div>
    <div className="pane">
      <iframe
        title = "output"
        sandbox ="allow-scrpts"
      />
    </div>
    </>
  )
}

export default App;
