import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../reduxwork/Slice/cartSlice';
import toast from 'react-hot-toast';


function CartItems({ item, itemIndex }) {
  const dispatcher = useDispatch()

  const removeFromCart = () => {
    dispatcher(remove(item.id))
    toast.success("Removed",{
      
      icon:'❌',
      style: {
        overflow:'hidden',
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    },
    })
  }
  return (
    <div className="flex flex-col w-[450px] mt-6  justify-center items-center gap-16  border-b-4 border-gray-700 overflow-y-hidden ">
      <div className=" flex gap-8 mt-8 items-center justify-around h-[200px] w-full overflow-y-hidden  ">
        <div>
          <img src={item.image} className=" mt-4 h-[120px]" alt="" />
        </div>
        <div className="h-[180px] ">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}</h1>
          <h1 className="w-40 text-gray-500 font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>

      
          <div className="flex justify-between mt-4">
            <p className="text-green-600 font-semibold ">${item.price}</p>
            <div onClick={removeFromCart}>
            <MdDeleteForever className='bg-red-200 rounded-lg' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItems