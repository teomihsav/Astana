import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/i18n';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="625073377461-md21kv5a7573uae4hdo9e1q5lvk705ib.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
)
