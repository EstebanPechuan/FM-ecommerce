<script>
    import { cont, list_to_cart } from '../store/store'

    export let product
    let count = 0

    const handleSubmit = () => {
        let check_product = $list_to_cart.find(item => item.id === product.id)

        if (count !== 0 && !check_product) {
            let new_cart = {
                id: product.id,
                name: product.name,
                price: product.price * (product.discount / 100),
                cant: count,
                // img: product.imgs[0]
            }
            $list_to_cart.push(new_cart)

            $cont += count
            count = 0
        }
    }
    const handleRest = () => {
        count < 1 ? count = 0 : count--
    }
    const handleAdd = () => {
        count ++
    }
</script>

<div class="description">
    <h3>{product.category.toUpperCase()}</h3>
    <h1>{product.name}</h1>

    <p>{product.description}</p>

    <div class="final_price">
        <span>${product.price * (product.discount / 100)}.00</span>
        <span class="discount">{product.discount}%</span>
    </div>

    <div class="real_price">${product.price}.00</div>

    <div class="add_to_cart">
        <div class="counter">
            <button on:click={handleRest}>-</button>
            <div>{ count }</div>
            <button on:click={handleAdd}>+</button>
        </div>

        <form on:submit={handleSubmit}>
            <button>
                <i class='bx bx-cart'></i>
                Add to cart
            </button>
        </form>
    </div>
</div>

<style>
    .description {
        padding-right: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    .description h3 {
        color: var(--clr-1);
        font-size: 12px;
        font-weight: 700;
    }
    .description h1 {
        font-size: 30px;
    }
    .description p {
        margin-top: 30px;
        font-size: 14px;
        color: #0009;
        line-height: 1.3;
    }
    .final_price {
        font-size: 30px;
        font-weight: 700;
        
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .discount {
        padding: 2px 5px;
        background: var(--clr-2);
        color: var(--clr-1);
        font-size: 14px;
        display: block;
        height: fit-content;
    }
    .real_price {
        color: #0007;
        text-decoration: line-through;
        font-size: 14px;
    }
    .add_to_cart {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .counter {
        height: 30px;
        padding: 0 20px;
        background: #0001;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .counter button {
        color: var(--clr-1);
        background: transparent;
        font-weight: 700;
        font-size: 18px;
        border: none;
        cursor: pointer;
    }
    form {
        height: 30px;
    }
    form button {
        height: 100%;
        padding: 0 40px;
        border: none;
        background: var(--clr-1);
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
</style>