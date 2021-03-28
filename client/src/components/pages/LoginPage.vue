<template>
    <div class="login-page">
        <Authorization/>
    </div>
</template>
<script>
import Authorization from '../forms/Authorization'
export default {
    name: 'LoginPage',
    components: {
        Authorization
    }
}
</script>