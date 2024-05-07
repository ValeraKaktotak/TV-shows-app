import type { FC } from 'react'
import { SUBSCRIPTIONS } from '../../../constant/mockData'
import { Container } from '../../../styles/global/default'
import { SectionTitle } from '../../common/SectionTitle/SectionTitle'
import { SubscriptionWrapper } from './Subscription.styles'
import { SubscriptionItem } from './SubscriptionItem'

export const Subscription: FC = () => {
  return (
    <SubscriptionWrapper>
      <SectionTitle
        title={"Choose the plan that's right for you"}
        text={
          'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
        }
      />
      <Container>
        <div className='subs-content'>
          <div className='subs-list grid'>
            {SUBSCRIPTIONS?.map((sub) => (
              <SubscriptionItem data={sub} key={sub.id} />
            ))}
          </div>
        </div>
      </Container>
    </SubscriptionWrapper>
  )
}
