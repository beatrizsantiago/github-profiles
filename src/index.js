import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { ApolloProvider } from '@apollo/react-hooks'

import client from './services/api'

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

