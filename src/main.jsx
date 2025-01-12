import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './layout';
import { QrCodeGenerator } from './qr_generate';

createRoot(document.getElementById('root')).render(
  <Layout/>,
)
