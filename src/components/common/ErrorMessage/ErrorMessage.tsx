import type { FC } from 'react'
import { ErrorMessageWrapper } from './ErrorMessage.styles'

export const ErrorMessage: FC = () => {
  return (
    <ErrorMessageWrapper>
      <div>Error message here !!!</div>
    </ErrorMessageWrapper>
  )
}
