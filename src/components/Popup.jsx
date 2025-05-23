import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Button from './Button'

const Popup = ({orderPopup,handleOrderPopup}) => {
    return (
        <>
        {
            orderPopup && (
                <div>
                <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                    <div className='w-[300px] rounded-xl fixed top-1/2 left-1/2 -translate-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
                        <div className='flex items-center justify-between'>
                            <h1>Order Now</h1>
                            <div>
                                <IoMdCloseCircleOutline onClick={() => handleOrderPopup(!orderPopup) } className='txt-2xl cursor-pointer'></IoMdCloseCircleOutline>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <input type='text' placeholder='Name...' className='form-input'></input>
                            <input type='email' placeholder='Email' className='form-input'></input>
                            <input type='text' placeholder='Address' className='form-input'></input>
                            <div className='flex justify-center'>
                                <Button text={'Order Now'} bgcolor={"bg-primary"} textcolor={'text-white'}></Button>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default Popup
