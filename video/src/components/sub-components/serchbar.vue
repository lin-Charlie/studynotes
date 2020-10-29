<template>
    <div>
        <div class="header">
            <div class="header-serch" >
                <input type="text" placeholder="妖精的尾巴">
                <img src="../../assets/serch.png" alt="">
            </div>   
        </div> 
    </div>
</template>
<style lang="less" scoped>
*{
    margin: 0;
}
.header{
        z-index: 99;
        background-color: rgb(140,152,204);
        padding: 0.3rem 0.3rem;
        height: 1.5rem;
        width: 100%;
        .header-serch{
            height: 1rem;
            width: 9.4rem;
            margin: 0 auto;
            // border: 1px solid;
            input{
                height: 1rem;
                width: 100%;
                font-size: 13px;
                margin-bottom: 0;
                background-color:rgb(220, 220, 220);
                border-top-left-radius: 0.5rem;
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
            }
            img{
                position: absolute;
                top: 0.5rem;
                right: 1rem;
                width: 0.6rem;
                height: 0.6rem;
                opacity: 0.5;
            }
        }
    }
</style>