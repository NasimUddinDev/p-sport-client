import React from 'react';
import Image from "next/image";
import img1 from "../../public/Assets/btb.png";
import img2 from '../../public/Assets/toffee.png';
import img3 from '../../public/Assets/tsports.png';
import img4 from '../../public/Assets/gtv.png';

const WatchLive = () => {
  return (
    <div className="my-20 mx-5">
      <h2 className='text-xl font-bold my-14'>Where to Watch</h2>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto'>
        <Image className=' w-32' src={img1}></Image>
        <Image className=' w-32' src={img2}></Image>
        <Image className=' w-32' src={img3}></Image>
        <Image className=' w-32' src={img4}></Image>
      </div>
    </div>
  );
};

export default WatchLive;