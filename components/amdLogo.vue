<!--
  - Copyright (C) senko://digital - All Rights Reserved
  - Unauthorized copying of this file, via any medium is strictly prohibited
  - Proprietary and confidential
-->

<template>
    <div class="logoHeader">
        <img src="/images/logos/amd.png" alt="AMD logo" class="AMDLogo" />
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'AMDLogo',
    props: {},
};
</script>
  
<style scoped>
.logoHeader {
    display: flex;
    align-items: center;
    gap: 5px;
}

.AMDLogo {
    display: inline-block;
    vertical-align: middle;
    width: 64px;
    height: 32px;
}
</style>
