<template>
    <div class="main-box">
        <header class="header">
            <span>豆瓣</span>
            <button>打开豆瓣App</button>
        </header>
        <div class="content">
            <div class="content-box">
                <div class="content-box-top">
                    <h3>影院热映</h3>
                    <span @click="gengduo">更多</span>
                </div>
                <div class="content-box-box">
                    <div class="content-box-main" v-for="(item,index) in hot" :key="index" @click="jumpDetail(item,index)">
                        <img :src="item.poster" alt="">
                        <p>{{item.name}}</p>
                        <Start :data="item"></Start>
                    </div>
                </div>
            </div>

             <div class="content-box">
                <div class="content-box-top">
                    <h3>即将上映</h3>
                    <span>更多</span>
                </div>
                <div class="content-box-box">
                    <div class="content-box-main" v-for="(item,index) in up" :key="index">
                        <img :src="item.poster" alt="">
                        <p>{{item.name}}</p>
                        <!-- <span>豆瓣评分:{{item.grade}}</span> -->
                    </div>
                </div>
            </div>

             <div class="content-box">
                <div class="content-box-top">
                    <h3>影院热映</h3>
                    <span>更多</span>
                </div>
                <div class="content-box-box">
                    <div class="content-box-main" v-for="(item,index) in hot" :key="index">
                        <img :src="item.poster" alt="">
                        <p>{{item.name}}</p>
                        <span>豆瓣评分:{{item.grade}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Start from "./Start";
export default {
    props:{

    },
    components:{
        Start
    },
    data(){
        return {
            hot:[],
            up:[]
        }
    },
    computed:{

    },
    methods:{
         jumpDetail(item,index){
             this.$router.push({
                 path:`/detail:${index}`,
                 query:{
                     data:item
                 }
             })
        },
        gengduo(){
            this.$router.push("/gengduo")
        }
    },
    created(){
    
    },
    mounted(){  
        this.axios.get("/hot").then((res)=>{
            this.hot = res.data.data.films;
            console.log(res.data.data.films)
        })
         this.axios.get("/up").then((res)=>{
            this.up = res.data.data.films;
            
        })
    }
}
</script>
<style scoped lang="scss">
    .main-box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            span{
                color: #42BD56;
                font-weight: 600;
                font-size: 20px;
            }
            button{
                width: 100px;
                height: 35px;
                background: #42BD56;
                color: #fff;
                outline: 0;
                border: 0;
                border-radius: 15px;
            }
        }
        .content{
            flex:1;
            overflow-y: auto;
            .content-box{
                width: 100%;
                height: 250px;
                display: flex;
                flex-direction: column;
                // overflow: hidden;
                .content-box-top{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items:center;
                    justify-content: space-between;
                    padding: 0 10px;
                    span{
                        color: #42BD56;
                    }
                }  
                .content-box-box{
                    flex:1;
                    display: flex;
                    overflow-x: scroll;
                    // overflow-y: hidden;
                    .content-box-main{  
                        width: 30%;
                        text-align: center;
                        display: flex;
                        flex-direction:column;
                        align-items: center;
                        flex-shrink: 0;
                        img{
                            width: 90%;
                            height: 70%;
                        }
                        p{
                            font-size: 12px;
                        }
                        // span{
                        //     font-size: 14px;
                        //     color: gold;
                        // }
                    }
                }
                //  .content-box-box:-webkit-scrollbar{
                //     display: none;
                // }
            }
        }
    }
</style>