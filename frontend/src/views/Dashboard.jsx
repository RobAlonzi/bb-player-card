import React from 'react';
import { Navigate } from 'react-router-dom';
import URLS from '@/views/urls';



function Dashboard() {
  // If only I had more time for a Dashboard
  return <Navigate replace to={`/${URLS.PLAYERS}/8470638`} />
}


export default Dashboard;