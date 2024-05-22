import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter } from 'react-router-dom'
import { App } from './App.tsx'
import { persistor, store } from './redux/store'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </BrowserRouter>
// )

// Найдите элемент с id 'root'
const container = document.getElementById('root') as HTMLElement

// Создайте корневой рендерер
const root = ReactDOM.createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
