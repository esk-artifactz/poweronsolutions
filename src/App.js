import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React Website</h1>
        <p>This is a basic React application created from scratch!</p>
      </header>
      
      <main className="App-main">
        <section className="section">
          <h2>About This Site</h2>
          <p>This is a simple React website built with modern tools and best practices.</p>
        </section>
        
        <section className="section">
          <h2>Features</h2>
          <ul>
            <li>React 18 with modern hooks</li>
            <li>Webpack for bundling</li>
            <li>CSS styling</li>
            <li>Responsive design</li>
          </ul>
        </section>
        
        <section className="section">
          <h2>Contact</h2>
          <p>Feel free to reach out if you have any questions!</p>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2024 Simple React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
