<template>
    <div class="start">
        <span v-for="(item,index) in [1,2,3,4,5]" :key="index">
            <img
            v-if="(data.grade*10)/20 >= index+1"
             src="../../static/images/1.jpg" alt="">


             <img
            v-else-if="(data.grade*10)/20 >= index && (data.grade*10)%20 !=0"
              src="../../static/images/2.jpg" alt="">

              <img
                v-else
               src="../../static/images/3.jpg" alt="">
        </span>
        <span>{{data.grade}}分</span>
    </div>
</template>
<script>
export default {
    props: ['data'], 
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
    .start{
        img{
            width: 15px;
            height: 15px;
        }
        span{
            font-size: 13px;
            color: gold;
        }
    }
</style>