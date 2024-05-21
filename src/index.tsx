import ReactDOM from 'react-dom/client';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { interceptor } from './Utils/interceptor';
import { MiniThemeContext, siteMiniTheme } from './Utils/MiniTheme';

//create axios interceptor
interceptor.createInterceptor();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store = {store}>
        <MiniThemeContext.Provider value = {siteMiniTheme}>
            <Layout/>
        </MiniThemeContext.Provider>
    </Provider> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
