import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../reduxwork/Slice/cartSlice';
import toast from 'react-hot-toast';

function Product({ post }) {

    const { cart } = useSelector((state) => state)
    const dispatcher = useDispatch();

    const addToCart = () => {
        dispatcher(add(post))
        toast.success("added", {
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
    }

    const removeFromCart = () => {
        dispatcher(remove(post.id))
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
        <div  className='flex flex-col items-center justify-between
         hover:scale-110 transition duration-400 ease-in gap-3 p-4 mt-10 ml-5  rounded-lg  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
        '>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1  '>{post.title}</p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left  '>{post.description.split(" ").slice(0,12).join(" ")+  '....'}</p>
            </div>
            <div className='h-[180px]'>
                <img src={`${post.image}`} alt="" className='h-full w-full ' />
            </div>

            <div className='flex justify-between gap-12 items-center w-full mt-5
             '>
            <div>
                <p className='text-green-600 font-semibold '>${post.price}</p>
            </div>
           
            {
                cart.some((entity) => entity.id == post.id) ?
                    (<button
                        className='text-gray-700 px-2 p-1 uppercase border-2 border-gray-700 rounded-full
                        hover:text-white
                        hover:bg-gray-700
                        transition duration-300 ease-in-out '
                        onClick={removeFromCart}>Remove item</button>)
                    : (<button 
                        className='text-gray-700 px-2 p-1 uppercase border-2 border-gray-700 rounded-full
                        hover:text-white
                        hover:bg-gray-700
                        transition duration-300 ease-in-out '
                        onClick={addToCart}>add to cart</button>)

            }

            </div>
           
        </div>
    )
}

export default Product