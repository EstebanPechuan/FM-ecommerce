<script>
    import main_img1 from '$lib/images/image-product-1.jpg'
    import main_img2 from '$lib/images/image-product-2.jpg'
    import main_img3 from '$lib/images/image-product-3.jpg'
    import main_img4 from '$lib/images/image-product-4.jpg'
	import ModalCarousel from './ModalCarousel.svelte';
    import { modalCarousel } from '../store/store'

    let img_main= main_img1

    const changeImg = (e) => {
        // let index = e.target.src.search('-thumbnail');
        // let img_new = e.target.src.slice(0, index)
        // img_main = `${img_new}.jpg`
        img_main = e.target.src
        
        let find_active = document.querySelector('.active')
        find_active.classList.remove('active')

        e.target.parentElement.classList.add('active')
    }

    const handleModal = () => {
        $modalCarousel = true
    }
</script>

<div class="images_product">
    <div on:click={handleModal} class="main">
        <img src={img_main} alt={img_main}>
    </div>
    
    <div class="thumbnails">
        <div class="active each_img">
            <img on:click={changeImg} src={main_img1} alt={main_img1}>
        </div>
        <div class="each_img">
            <img on:click={changeImg} src={main_img2} alt={main_img2}>
        </div>
        <div class="each_img">
            <img on:click={changeImg} src={main_img3} alt={main_img3}>
        </div>
        <div class="each_img">
            <img on:click={changeImg} src={main_img4} alt={main_img4}>
        </div>
    </div>
</div>

<!-- {#if $modalCarousel}
    <ModalCarousel />
{/if} -->

<style>
    .images_product {
        width: 100%;
        max-width: 400px;
        margin: auto;
    }

    .images_product img {
        width: 100%;
    }

    .main {
        cursor: pointer;
    }
    
    .main img {
        border-radius: 8px;
    }

    .thumbnails {
        width: 100%;
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }

    .each_img {
        border-radius: 5px;
        cursor: pointer;
        overflow: hidden;
        border: 2px solid transparent;
    }

    .each_img.active {
        border: 2px solid var(--clr-1);
    }
    
    .each_img.active img {
        opacity: 0.4 !important;
    }

    .each_img:hover img {
        opacity: 0.6;
    }
</style>