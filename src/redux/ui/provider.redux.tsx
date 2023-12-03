'use client'

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ReactNode } from 'react';

interface ProviderReduxProps {
  children: ReactNode
}

export function ProviderRedux({ children }: ProviderReduxProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}