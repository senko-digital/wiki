<!--
  - Copyright (C) senko://digital - All Rights Reserved
  - Unauthorized copying of this file, via any medium is strictly prohibited
  - Proprietary and confidential
-->

<template>
    <div class="logoHeader">
        <img src="/images/games/minecraft/minecraft.png" alt="minecraft logo" class="minecraftLogo" />
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'minecraftLogo',
    props: {},
};
</script>
  
<style scoped>
.logoHeader {
    display: flex;
    align-items: center;
    gap: 10px;
}

.minecraftLogo {
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
}
</style>
