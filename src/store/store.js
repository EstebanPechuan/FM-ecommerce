import { writable } from "svelte/store";

let locStoreCant = 0
let product = [
    {
        id: 1,
        category: 'sneaker company',
        name: 'Fall Limited Edition Sneakers',
        description: "These low-profile sneakers are your perfect casual wear comanion. Featuring a durable a rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250,
        discount: 50,
        // imgs: [
        //     'src/lib/images/image-product-1.jpg',
        //     'src/lib/images/image-product-2.jpg',
        //     'src/lib/images/image-product-3.jpg',
        //     'src/lib/images/image-product-4.jpg'
        // ]
    }
]

let list_cart = []

let modal = false

export const cont = writable(locStoreCant)
export const products = writable(product)
export const list_to_cart = writable(list_cart)
export const modalCarousel = writable(modal)