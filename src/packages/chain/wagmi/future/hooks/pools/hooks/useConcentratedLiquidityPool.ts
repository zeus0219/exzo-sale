import { useQuery } from '@tanstack/react-query'
import { getConcentratedLiquidityPool } from '../actions'
import { Type } from '@sushiswap/currency'
import { FeeAmount, V3ChainId } from '@sushiswap/v3-sdk'

interface UseConcentratedLiquidityPool {
  token0: Type | undefined
  token1: Type | undefined
  chainId: V3ChainId
  feeAmount: FeeAmount | undefined
  enabled?: boolean
}

export const useConcentratedLiquidityPool = ({
  token0,
  token1,
  chainId,
  feeAmount,
  enabled = true,
}: UseConcentratedLiquidityPool) => {
  return useQuery({
    queryKey: ['useConcentratedLiquidityPool', { chainId, token0, token1, feeAmount }],
    queryFn: async () => {
      return await getConcentratedLiquidityPool({
        chainId,
        token0,
        token1,
        feeAmount,
      })
    },
    refetchInterval: 10000,
    enabled: Boolean(enabled && feeAmount && chainId && token0 && token1),
  })
}
