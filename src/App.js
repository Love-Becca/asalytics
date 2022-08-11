import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import { ApolloClient, ApolloProvider,InMemoryCache, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

//To  get information about error
const errorLink = onError(({graphqlErrors, networkError}) =>{
  if (graphqlErrors) {
    graphqlErrors.map(({message, location,path}) => alert(`Graphql error ${message}`));
  }
})

//end point
const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://analytics-api.herokuapp.com/analytics'
  })

])

//connecting to endpoint
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
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
