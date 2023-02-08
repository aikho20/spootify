
import {BrowserRouter, Switch} from 'react-router-dom'
import {routes} from './routes/routes.js'

function App() {
    return (
        <BrowserRouter>           
            <Switch>
                 {/* make sure that even going to / it will be directed on the expected pages*/}
                {routes.map((r) => (
                    <r.defaultComponent
                        key={r.name}
                        exact
                        path={r.path}
                        {...r}
                        component={() =>
                            r.layout ? (
                                <r.layout>
                                    <r.component />
                                </r.layout>
                            ) : (
                                <r.component />
                            )
                        }
                    />
                ))}
            </Switch>
            </BrowserRouter>

    )
}

export default App
