import React from 'react'
import ProfileSidebar from '../../Components/Profile/ProfileSidebar'
import AccountDetailsForm from '../../Components/Profile/AccountDetailForm'

const Profile = () => {
  return (
    <div  className='flex items-center bg-white rounded-3xl'>
      <div className="left w-1/3  h-[94vh] bg-[#f9fafc] rounded-3xl">
        <ProfileSidebar/>
      </div>
      <div className="right h-full w-2/3">
      <AccountDetailsForm/>
      </div>
     
    </div>
  )
}

export default Profile
