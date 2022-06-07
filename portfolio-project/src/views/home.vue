<template>
<main class="content">
    <h1>HOME</h1>
</main>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
router.push('/')
</script>
<style scoped>
h1{
    color: black;
}
</style>