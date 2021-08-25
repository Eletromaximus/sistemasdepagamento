import stripeConfig from '../../../config/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  })

  const skus = await stripe.skus.list()
  return {
    props: {
      skus: skus.data
    }
  }
}
