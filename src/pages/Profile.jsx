import React from 'react'
import './Profile.css'
import { withAuth } from './AuthContext'

export const Profile = () => {
  return <>
    <div className='profileInputBox'>Форма заполнения карты</div>
  </>
};
export const ProfileWithAuth = withAuth(Profile);
