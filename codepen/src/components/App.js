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
        width = "100%"
        height = "100%"
      />
    </div>
    </>
  )
}

export default App;
