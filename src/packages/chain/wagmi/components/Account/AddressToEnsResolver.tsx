import { ChainId } from '@sushiswap/chain'
import { ReactNode, useEffect } from 'react'
import { useEnsName } from 'wagmi'

export type Props = Parameters<typeof useEnsName>[0] & {
  children: ReactNode | Array<ReactNode> | ((payload: ReturnType<typeof useEnsName>) => JSX.Element)
}

export const AddressToEnsResolver = ({
  children,
  onSuccess,
  chainId = ChainId.ETHEREUM,
  ...props
}: Props): JSX.Element => {
  const result = useEnsName({ ...props, chainId })

  // Custom onSuccess callback to send success data with resolved result
  useEffect(() => {
    if (result.data && onSuccess) onSuccess(result.data)
  }, [onSuccess, result.data])

  if (typeof children === 'function') {
    return children(result)
  }

  return <>{children}</>
}
