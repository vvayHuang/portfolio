<script setup>

</script>

<template>
    <div class=" d-flex py-lg-2 align-items-end mb-3 mb-md-0">
        <h3 class="fs-md-4 fs-6 text-secondary">
            <slot name="heading"></slot>
        </h3>
        <i>
            <slot name="icon"></slot>
        </i>
    </div>
</template>

<style scoped>
i{
    transform: rotateY(180deg);
}
</style>