import '@styles/custom.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { Provider } from 'react-redux'
import { CartProvider } from 'react-use-cart'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
//internal import
import DefaultSeo from '@components/common/DefaultSeo'
import { SidebarProvider } from '@context/SidebarContext'
import { UserProvider } from '@context/UserContext'
import useAsync from '@hooks/useAsync'
import { handlePageView } from '@lib/analytics'
import getStripe from '@lib/stripe'
import store from '@redux/store'
import SettingServices from '@services/SettingServices'

let persistor = persistStore(store)

let stripePromise = getStripe()

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const {
    data: storeSetting,
    loading,
    error
  } = useAsync(SettingServices.getStoreSetting)

  useEffect(() => {
    // Initialize Google Analytics
    if (!loading && !error && storeSetting?.google_analytic_status) {
      ReactGA.initialize(storeSetting?.google_analytic_key || '')

      // Initial page load
      handlePageView()

      // Track page view on route change
      const handleRouteChange = (url) => {
        handlePageView(`/${router.pathname}`, 'vistamart')
      }

      // Set up event listeners
      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [storeSetting])

  // console.log("storeSetting", storeSetting, "stripePromise", stripePromise);

  return (
    <>
      {!loading && !error && storeSetting?.tawk_chat_status && (
        <TawkMessengerReact
          propertyId={storeSetting?.tawk_chat_property_id || ''}
          widgetId={storeSetting?.tawk_chat_widget_id || ''}
        />
      )}

      <SessionProvider>
        <UserProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <SidebarProvider>
                <Elements stripe={stripePromise}>
                  <CartProvider>
                    <DefaultSeo />
                    <Component {...pageProps} />
                  </CartProvider>
                </Elements>
              </SidebarProvider>
            </PersistGate>
          </Provider>
        </UserProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
