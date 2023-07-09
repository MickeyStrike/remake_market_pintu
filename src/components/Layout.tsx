import React, { ReactNode, FC } from 'react'
import Headers from './Headers'
import SubHeader from './SubHeader'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='max-w-7xl m-auto'>
      <Headers />
      <div className='px-4 pt-4 pb-10'>
        <SubHeader />
        {children}
      </div>
    </div>
  )
}

export default Layout