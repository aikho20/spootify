import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
//import Routes from './routes';
//import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss'
import App from './App'
import ErrorFallBack from './common/components/ErrorFallBack'
import Loader from './common/components/Loader'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </ErrorBoundary>,
    document.getElementById('root')
)
