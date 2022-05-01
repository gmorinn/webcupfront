import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./screens/errorBoundary";
import { ProvideAuth } from './hooks/useAuth';

import Loader from './components/Loader';
import App from './App';

const g = "color:#00000;font-weight:bold;font-size:18px;";
const hello = `%c 🤙 https://guillaume-morin.fr/`;
console.info(hello, g);

ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <ProvideAuth>
        <RecoilRoot>
            <BrowserRouter>
                <App />
          </BrowserRouter>
        </RecoilRoot>
      </ProvideAuth>
    </Suspense>
  </ErrorBoundary>,
  document.getElementById('root')
);

reportWebVitals();
