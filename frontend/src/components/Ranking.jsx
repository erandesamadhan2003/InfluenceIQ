import React from 'react'
import { SidebarFilters } from './shared/RankingSideBar'
import { HeroSection, InfluencerList } from './Layout/RankingLayout'

export const Ranking = () => {
  return (
    <div>
      <SidebarFilters />
      <HeroSection />
      <InfluencerList />
    </div>
  )
}
