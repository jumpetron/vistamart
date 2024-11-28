import React from 'react'
import { Helmet } from 'react-helmet'

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {' '}
        {title
          ? `${title} | React eCommerce Admin Dashboard`
          : 'VistaMart | React eCommerce Admin Dashboard'}
      </title>
      <meta
        name='description'
        content={
          description
            ? ` ${description} `
            : 'VistaMart : React Grocery & Organic Food Store e-commerce Admin Dashboard'
        }
      />
    </Helmet>
  )
}

export default PageTitle
