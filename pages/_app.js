import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

  const props = {
    ...pageProps,
    user: { name: 'dulyakit' }
  }
  return <Component {...props} />
}

export default MyApp
