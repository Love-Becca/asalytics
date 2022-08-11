import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import { ApolloClient, ApolloProvider } from '@apollo/client';
 
const client = new ApolloClient({
  uri: 'https://analytics-api.herokuapp.com/analytics'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ApolloProvider>
  );
}

export default App;
