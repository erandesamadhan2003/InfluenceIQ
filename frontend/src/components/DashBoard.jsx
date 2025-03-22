import React from 'react'
import { ProfileSettings, SavedProfiles, SubmittedReviews } from './Layout/DashboardLayout'

export const DashBoard = () => {
  return (
    <div>
        <SavedProfiles />
        <SubmittedReviews />
        <ProfileSettings />
    </div>
  )
}
