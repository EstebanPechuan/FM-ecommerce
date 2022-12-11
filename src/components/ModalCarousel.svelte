<script>
	// import Carousel from "./Carousel.svelte";
    import { modalCarousel } from "../store/store";

    const closeModal = () => {
        $modalCarousel = false
    }
</script>

<div class="modal">
    <div on:click={closeModal} class="close">x</div>

    <div class="content">
        <div>modal</div>
    </div>
</div>

<style>
    .modal {
        width: 100%;
        height: 100vh;
        background: #000d;

        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .close {
        position: absolute;
        top: 50px;
        right: 80px;
        color: #fff;
        font-size: 28px;
        cursor: pointer;
    }
</style>