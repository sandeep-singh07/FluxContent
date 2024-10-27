import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Setting() {
  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='w-full max-w-full overflow-x-hidden flex items-center justify-center'>
        <UserProfile />
      </div>
    </div>
  );
}

export default Setting;