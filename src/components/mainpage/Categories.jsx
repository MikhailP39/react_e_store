import React from "react";

const Categories = () => {
        const data = [
            {
                catImage: require("../assets/images/category/fashion.png"),
                catName: "Fashion",
            },
            {
                catImage: require("../assets/images/category/electronics.jpg"),
                catName: "Electronics",
            },
            {
                catImage: require("../assets/images/category/cars.png"),
                catName: "Cars",
            },
            {
                catImage: require("../assets/images/category/home_and_garden.png"),
                catName: "Home & Garden",
            },
            {
                catImage: require("../assets/images/category/gifts.png"),
                catName: "Gifts",
            },
            {
                catImage: require("../assets/images/category/music.png"),
                catName: "Music",
            },
            {
                catImage: require("../assets/images/category/health_and_beauty.png"),
                catName: "Health & Beauty",
            },
            {
                catImage: require("../assets/images/category/pets.png"),
                catName: "Pets",
            },
            {
                catImage: require("../assets/images/category/baby_toys.png"),
                catName: "Baby Toys",
            },
            {
                catImage: require("../assets/images/category/groceries.png"),
                catName: "Groceries",
            },
            {
                catImage: require("../assets/images/category/books.png"),
                catName: "Books",
            },
        ]
    return (
        <>
            <div className="category">
                {
                    data.map((value, index) => {
                        return(
                            <div className="box f-flex" key={index}>
                                <img src={value.catImage} alt={"cat1"}/>
                                <span>{value.catName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories