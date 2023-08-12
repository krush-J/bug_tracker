import React from 'react'
import { Navbar } from '../components'
import BugScreen from './BugScreen'

const HomeScreen = () => {
  return (
    <div class='flex-col w-full bg-gray-900 min-h-screen'>
      <Navbar />
      <div className="flex w-full items-center justify-center">
      <BugScreen />
      </div>
    </div>
  )
}

export default HomeScreen