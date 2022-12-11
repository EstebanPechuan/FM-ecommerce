<script>
	import Carousel from "../components/Carousel.svelte";
	import Description from "../components/Description.svelte";
    import { products } from "../store/store";

    let product = $products[0]
    
</script>

<section class="container section_home">
    <Carousel />
    <Description product={product} />
</section>

<style>
    .section_home {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 50px;
    }
    @media (min-width: 650px) {
        .section_home {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>