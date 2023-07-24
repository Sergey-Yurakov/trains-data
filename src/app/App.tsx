import React, { Suspense } from 'react';

import { MainPage } from '@/pages/MainPage';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Suspense fallback="">
                <MainPage />
            </Suspense>
        </div>
    );
}

export default App;
