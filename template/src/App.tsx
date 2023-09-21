import * as React from 'react';

function App() {
    return(
        <div className="app">
            <h1>Apache Cordova</h1>
            <div id="deviceready" className="blink">
                <p className="event listening">Connecting to Device</p>
                <p className="event received">Device is Ready</p>
            </div>
        </div>
        );
}
export default App;
