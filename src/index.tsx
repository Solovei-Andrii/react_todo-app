import { createRoot } from 'react-dom/client';

import './styles/index.scss';

import { App } from './App';
import { TodosProvider } from './store';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <TodosProvider>
    <App />
  </TodosProvider>,
);