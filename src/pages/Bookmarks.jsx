import { useSelector } from "react-redux";
import React from 'react'
import { Navbar } from '../layouts';
import FeaturesSidebar from '../layouts/sidbars/FeaturesSidebar'
import { Navigate } from "react-router-dom";

const Bookmarks = () => {
    const { isSignedIn } = useSelector((s) => s.user);


        if (!isSignedIn) {
          return <Navigate to="/" replace />;
        }
      

  return (
    <div className="overflow-hidden h-screen">
      <Navbar />

      <main className="mt-14 h-[calc(100%-56px)]">
        <FeaturesSidebar />
      </main>
    </div>
  );
}

export default Bookmarks