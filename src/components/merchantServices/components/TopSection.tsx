import React from 'react'
import { ArrowLeft, Heart, Upload } from 'lucide-react'
import coverImg from '@/assets/profileCover.png';

function TopSection() {
  return (
   <div>
         <div className="flex justify-between items-center px-10 pt-10">
          <button className="flex items-center gap-2 text-accent-darker2 bg-white px-4 py-2 rounded-md">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white text-accent-darker2 px-4 py-2 rounded-md">
              <Upload size={16} />
              Share
            </button>

            <button className="bg-white p-3 rounded-md shadow ">
              <Heart size={18} className="text-accent-darker2" />
            </button>
          </div>
          <div>
            <img src={coverImg} alt="Cover" className="w-full h-[260px] object-cover rounded-3xl" />
          </div>
        </div>
    </div>
  )
}

export default TopSection
