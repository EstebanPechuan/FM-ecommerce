<script>
    import { list_to_cart, cont } from "../store/store";
    import thumbnail from '$lib/images/image-product-1.jpg'

    let list_of_products = $list_to_cart

    const deleteProduct = (id, cant) => {
        let prod_to_delete = $list_to_cart.findIndex(item => item.id === id)

        $list_to_cart.splice(prod_to_delete, 1)
        $cont -= cant
    }

    $: list_of_products = $list_to_cart
</script>

<h3>Cart</h3>
<hr>
<div class="products">
    {#if list_of_products.length !== 0}
        {#each list_of_products as product}
            <div class="prod">
                <img src={thumbnail} alt="Thumbnail">
                
                <div class="details">
                    <h2>{product.name}</h2>

                    <div class="price">
                        <span>${product.price}.00 x {product.cant}</span>
                        <span class="total">${product.price * product.cant}.00</span>
                    </div>
                </div>

                <div on:click={() => deleteProduct(product.id, product.cant)} class="trash">
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        {/each}
    {:else}
        <div class="empty">
            <p>Your cart is empty</p>
        </div>
    {/if}
    
</div>
    
<style>
    .prod {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .details {
        height: 100%;
        color: #0009;
        font-size: 14px;
    }
    h3 {
        font-size: 14px;
        font-weight: 700;
    }
    hr {
        border: 1px solid #0002;
        margin: 10px 0;
    }
    h2 {
        font-size: 14px;
        font-weight: 400;
    }
    .total {
        font-weight: 700;
        color: #000;
    }
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 4px;
    }
    .trash {
        margin-left: auto;
    }
    .empty {
        text-align: center;
        padding: 80px 0;
    }
</style>