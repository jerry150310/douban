<template>
    <div class="detail">
        {{this.$route.query.data}}
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .detail{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 60px;
            background: #f5f5f5;
        }
    }
</style>