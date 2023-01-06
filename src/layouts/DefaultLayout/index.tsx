import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      {/* Space for content, specific to every page */}
      <Outlet />
    </LayoutContainer>
  )
}
