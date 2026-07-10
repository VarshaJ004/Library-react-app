import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import './Book.css'

const BookView = () => {

    const [data, changeData] = useState([
        {
            title: "The Midnight Library",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
            author: "Matt Haig",
            price: 399
        },
        {
            title: "Atomic Habits",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
            author: "James Clear",
            price: 549
        },
        {
            title: "To Kill a Mockingbird",
            image: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=500&q=80",
            author: "Harper Lee",
            price: 299
        },
        {
            title: "The Alchemist",
            image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&q=80",
            author: "Paulo Coelho",
            price: 320
        },
        {
            title: "Educated",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
            author: "Tara Westover",
            price: 450
        },
        {
            title: "Where the Crawdads Sing",
            image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&q=80",
            author: "Delia Owens",
            price: 425
        },
        {
            title: "Sapiens",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
            author: "Yuval Noah Harari",
            price: 599
        },
        {
            title: "Thinking, Fast and Slow",
            image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80",
            author: "Daniel Kahneman",
            price: 499
        },
        {
            title: "The Silent Patient",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80",
            author: "Alex Michaelides",
            price: 350
        },
        {
            title: "Project Hail Mary",
            image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&q=80",
            author: "Andy Weir",
            price: 580
        }
    ])


    return (
        <div>

            <Navigationbar />

            <div className="container">

                <h1 className='page-heading mt-4 text-center'>
                    HAPPY READ!!
                </h1>


                <div className="row mt-4">

                    {
                        data.map((value, index) => {

                            return (

                                <div 
                                className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                key={index}
                                >

                                    <div className="card shadow h-100">

                                        <div className="card-body">

                                            <img 
                                            src={value.image}
                                            className="card-img-top book-img"
                                            alt={value.title}
                                            />


                                            <h5 className="card-title mt-3">
                                                {value.title}
                                            </h5>


                                            <p className="card-text">
                                                Author: {value.author}
                                            </p>


                                            <p className="card-text">
                                                <strong>
                                                    Price: ₹{value.price}
                                                </strong>
                                            </p>


                                            <button className="btn btn-primary w-100">
                                                Add to Cart
                                            </button>


                                        </div>

                                    </div>

                                </div>

                            )

                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default BookView