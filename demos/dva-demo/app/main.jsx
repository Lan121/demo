import React from 'react';
import dva from 'dva';
import App from './App';

const app = dva();
app.model({
  namespace: 'global',
  state: {
    text: '你好，访问者',
    name: '访问者'
  },
  reducers: {
    change(state, action) {
      return {
        ...state,
        name: action.payload,
        text: '你好，' + action.payload
      };
    },
  },
});

// 4. Router
app.router(() => <App />);

// 5. Start
app.start(document.body.appendChild(document.createElement('div')));