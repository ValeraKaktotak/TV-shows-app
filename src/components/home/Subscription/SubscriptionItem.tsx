import type { FC } from 'react'
import { BaseLinkSecondary } from '../../../styles/components/Button'
import { HeadingTitleMd, Paragraph } from '../../../styles/global/default'
import { SubscriptionItemWrapper } from './Subscription.styles'

interface ISubscriptionItem {
  data: SUBSCRIPTIONS_Interface
}

export const SubscriptionItem: FC<ISubscriptionItem> = ({ data }) => {
  return (
    <SubscriptionItemWrapper className=' bg-black-10 flex flex-col justify-between'>
      <div className='item-top'>
        <HeadingTitleMd>{data.plan}</HeadingTitleMd>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <div className='item-bottom'>
        <div className='item-price flex items-baseline flex-wrap'>
          <p className='item-price-text font-semibold'>{data.monthly_price}</p>
        </div>
        <div className='item-btn-group flex items-center flex-wrap'>
          <BaseLinkSecondary to='/' className='item-btn'>
            <span className='btn-text'>Start Free Trial</span>
          </BaseLinkSecondary>
          <BaseLinkSecondary to='/' className='item-btn'>
            <span className='btn-text'>Choose Plan</span>
          </BaseLinkSecondary>
        </div>
      </div>
    </SubscriptionItemWrapper>
  )
}
