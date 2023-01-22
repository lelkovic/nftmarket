import React from 'react';
import { HomePage } from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// import { NotFound } from './components/NotFound/NotFound';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    {/* <Route exact path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;