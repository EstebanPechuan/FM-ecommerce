<script>
    import { cont } from "../store/store";
    import img_user from '$lib/images/image-avatar.png'
	import Cart from "./Cart.svelte";

    let openCart = false

    const handleCart = () => {
        openCart = !openCart
    }
</script>

<header>
    <div class="logo">
        <a href="/">
            <h2>sneakers</h2>
        </a>
    </div>

    <nav>
        <ul class="menu">
            <li><a href="/collections">Collections</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

    <div class="userInfo">
        <div class="cart">
            <i on:click={handleCart} class='bx bx-cart'></i>

            {#if $cont != 0}
                <div class="cartNumber">{$cont}</div>
            {/if}

            {#if openCart}
                <div class="card_details">
                    <Cart />
                </div>
            {/if}
        </div>

        <div class="imgUser">
            <img src={img_user} alt="">
        </div>
    </div>
</header>

<style>
    header {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px;
        border-bottom: 1px solid #0003;
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .logo h2 {
        font-size: 30px;
        line-height: 1;
    }

    header li {
        font-size: 14px;
        color: #0009;
    }

    header i {
        font-size: 24px;
    }

    .menu {
        display: none;
        gap: 10px;
    }

    .userInfo {
        margin-left: auto;

        display: flex;
        align-items: center;
        gap: 20px;
    }

    .cart {
        position: relative;
        cursor: pointer;
    }
    
    .cartNumber {
        padding: 2px 10px;
        font-size: 10px;
        background: var(--clr-1);
        border-radius: 10px;
        color: #fff;
        position: absolute;
        top: -5px;
        right: -15px;
    }

    .card_details {
        width: 350px;
        padding: 20px 30px;
        background: #fff;
        box-shadow: 0 2px 10px #0004;
        border-radius: 8px;
        
        position: absolute;
        top: 40px;
        right: 0;
    }

    .imgUser img {
        width: 30px;
    }
    @media (min-width: 650px) {
        .menu {
            display: flex;
        }
    }
</style>