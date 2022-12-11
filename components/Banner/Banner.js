import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='bg-secondary p-5'>
                <img src="https://digitalhub.fifa.com/transform/3b5bdf8d-b9d4-4c31-bb54-adf7c059c546/Hublot-FWC2022-09-DEC?io=transform:fill&quality=75" alt="" className='w-1/2 mx-auto' />
                <div className='flex justify-between text-white font-bold text-2xl items-center my-5'>
                    <hr className='border border-yellow-400 w-1/4' />
                    <h1>Matches</h1>
                    <hr className='border border-yellow-400 w-1/4' />
                </div>
                <div className="card bg-base-100 shadow-xl my-2">
                    <div className="card-body p-4 leading-none">
                        <div className='flex text-gray-600 font-bold text-sm leading-none'>
                            <p>Quarter-final</p>
                            <p className='text-end'>12 Dec 2020</p>
                        </div>
                        <p className='text-gray-600 font-bold text-sm'>Lusail Stadium</p>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png" alt="" className='w-[25px] mx-2' />
                                <p className='font-semibold'>Netherlands</p>
                            </div>
                            <div>
                                <p className='font-semibold'>0</p>
                            </div>
                        </div>
                        <div className='flex justify-end '>
                            <div className='btn btn-error btn-xs w-4 text-white'>FT</div>
                        </div>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png" alt="" className='w-[25px] mx-2' />
                                <p className='font-semibold'>Argentina</p>
                            </div>
                            <div>
                                <p className='font-semibold'>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-2">
                    <div className="card-body p-4 leading-none">
                        <div className='flex text-gray-600 font-bold text-sm leading-none'>
                            <p>Quarter-final</p>
                            <p className='text-end'>13 Dec 2020</p>
                        </div>
                        <p className='text-gray-600 font-bold text-sm'>Education City Stadium</p>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png" alt="" className='w-[25px] mx-2' />
                                <p className='font-semibold'>Croatia</p>
                            </div>
                            <div>
                                <p className='font-semibold'>2</p>
                            </div>
                        </div>
                        <div className='flex justify-end '>
                            <div className='btn btn-error btn-xs w-4 text-white'>FT</div>
                        </div>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png" alt="" className='w-[25px] mx-2' />
                                <p className='font-semibold'>Brazil</p>
                            </div>
                            <div>
                                <p className='font-semibold'>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <Carousel autoPlay emulateTouch infiniteLoop showThumbs={false}>
                    <div>
                        <img src="https://digitalhub.fifa.com/transform/8ee6c039-d966-4fb8-b5aa-6a64edfef317/FIFAPLS_SE_WhoToWatchEight_Main_Hero_01_V1" className='h-[250px] md:h-[450px] lg:h-[600px]' />
                    </div>
                    <div>
                        <img src="https://assets.khelnow.com/news/uploads/2022/11/363-Khel-Now-14-copy.jpg" className='h-[250px] md:h-[450px] lg:h-[600px]' />
                    </div>
                    <div>
                        <img src="https://digitalhub.fifa.com/transform/c8ad95c8-93ae-46c3-9dd5-161189d54193/FIFAPLS_WorldCup22Analysis_01_Hero_07_Brazil_00" className='h-[250px] md:h-[450px] lg:h-[600px]' />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;