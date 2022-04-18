import { ChakraProvider } from '@chakra-ui/react';
import HomeLayout from '../components/layouts/HomeLayout';
import '../styles/globals.css';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import theme from '../styles/theme';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
};

App.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default App;
