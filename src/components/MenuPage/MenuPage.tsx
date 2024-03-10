import './Menu.css'
import { useEffect, useState } from 'react'
import { data } from '../../ProductData.tsx'
import Loading from '../partials/Loading.tsx'

export default function MenuPage() {
    const [category, setCategory] = useState<string>('all')
    const [products, setProducts] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const searchParams = new URLSearchParams(window.location.search)
    const desc = 'Traditional Iced Americano is made by pouring cold water, over ice followed by shots of espresso. With manual pour over, the coffee drains directly onto the cold water and ice, so it chills during brewing.'

    useEffect(() => {
        setLoading(true)
        if (data) {
            setProducts(data)
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
    }, [data])

    useEffect(() => {
        const searchParamCategory = searchParams.get('category')

        if (searchParamCategory) {
            setCategory(searchParamCategory.toLowerCase())
        }

    }, [searchParams])


    return (
        <div className="menu__container">
            <div className="menu__header">
                <h1 id="menu__title">Our Products <span>Category: { category }</span></h1>

                <ul className="menu__navbar">
                    <li><a href="?category=All">All</a></li>
                    <li><a href="?category=Hot">Hot</a></li>
                    <li><a href="?category=Iced">Iced</a></li>
                    <li><a href="?category=Food">Food</a></li>
                </ul>
            </div>

            { loading && <Loading /> }

            <div className="menu__products">
                {
                    (loading === false && products !== null) &&
                    products[category]?.map((product: any, index: number) => (
                        <div key={index} className="menu-card">
                            <img src={`${product.image}`} alt="americano.jpg" />

                            <div className="menu-card__body">
                                <div className="menu-card-body-header">
                                    <h3>{product.name}</h3>
                                    <span>${product.price}</span>
                                </div>

                                <div className="menu-card-body-content">
                                    <p>{desc.length > 160 ? desc.substring(0, 160) + ' ...' : desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}