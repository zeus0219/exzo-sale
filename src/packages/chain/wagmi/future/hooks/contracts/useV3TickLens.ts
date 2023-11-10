import { getContract } from '@wagmi/core'
import { useMemo } from 'react'
import { Address, useProvider } from 'wagmi'
import { V3_TICK_LENS, V3ChainId } from '@sushiswap/v3-sdk'

export const getV3TickLensContractConfig = (chainId: V3ChainId) => ({
  address: V3_TICK_LENS[chainId] as Address,
  abi: [
    {
      inputs: [
        { internalType: 'address', name: 'pool', type: 'address' },
        { internalType: 'int16', name: 'tickBitmapIndex', type: 'int16' },
      ],
      name: 'getPopulatedTicksInWord',
      outputs: [
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'int128', name: 'liquidityNet', type: 'int128' },
            { internalType: 'uint128', name: 'liquidityGross', type: 'uint128' },
          ],
          internalType: 'struct ITickLens.PopulatedTick[]',
          name: 'populatedTicks',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ] as const,
})

export function useTickLensContract(chainId: V3ChainId | undefined) {
  const signerOrProvider = useProvider({ chainId })

  return useMemo(() => {
    if (!chainId) return null

    return getContract({ ...getV3TickLensContractConfig(chainId), signerOrProvider })
  }, [chainId, signerOrProvider])
}
