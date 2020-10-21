import React from 'react';


function App() {
  return (
    <>
    <div className="pane top-pane"></div>
    <div className="pane">
      <iframe
        title = "output"
        sandbox ="allow-scrpts"
        frameBorder = "0"
      />
    </div>
    </>
  )
}

export default App;
