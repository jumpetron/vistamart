import React from 'react'
import { DefaultSeo as NextSeo } from 'next-seo'

//internal import

import useAsync from '@hooks/useAsync'
import SettingServices from '@services/SettingServices'

const DefaultSeo = () => {
  const {
    data: globalSetting,
    loading,
    error
  } = useAsync(SettingServices.getGlobalSetting)
  return (
    <NextSeo
      title={globalSetting?.meta_title || 'vistamart'}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: globalSetting?.meta_url || 'https://vistamart-store.vercel.app/',
        site_name: globalSetting?.meta_title || 'vistamart'
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content:
            'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          href: 'https://vistamart.com.bd/wp-content/uploads/2023/12/Fab.png'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ]}
    />
  )
}

export default DefaultSeo
