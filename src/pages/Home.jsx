import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import Product from '../Components/Product'

function Home() {
    const API_URL = "https://fakestoreapi.com/products"
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchProductData() {
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log("error ahe");
            setPosts([])
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    return (
        <div>
            {
                loading ? (
                    <Spinner />
                ) : posts.length > 0 ? (
                    <div className='grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl  p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]: '>
                        {posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}

                    </div>
                ) : (
                    <div className='flex justify-center items-center'>
                        <p>No data found</p>
                    </div>
                )
            }
        </div>
    )
}

export default Home
