import '../styles/index.css'
console.log(process.env.NODE_ENV)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
