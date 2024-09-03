<!--
  - Copyright (C) senko://digital - All Rights Reserved
  - Unauthorized copying of this file, via any medium is strictly prohibited
  - Proprietary and confidential
-->

<template>
    <div class="logoHeader">
        <img src="/images/games/gmod/gmod.svg" alt="garry's mod logo" class="gmodLogo" />
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'gmodLogo',
    props: {},
};
</script>
  
<style scoped>
.logoHeader {
    display: flex;
    align-items: center;
    gap: 10px;
}

.gmodLogo {
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
}
</style>
