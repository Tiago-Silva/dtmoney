import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2022-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Design Desktop',
          type: 'deposit',
          amount: 10000,
          category: 'Dev desktop',
          createdAt: new Date('2022-06-23 09:00:00')
        },
        {
          id: 3,
          title: 'Pc Gamer',
          type: 'withdraw',
          amount: 5000,
          category: 'Infra',
          createdAt: new Date('2022-09-15 09:00:00')
        }
      ]
    });
  },


  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    let newId = 4;
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.id = newId++;

      // return schema.create('transation', data);
      return {transaction: data};
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


