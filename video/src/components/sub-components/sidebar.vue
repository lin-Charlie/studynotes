<template>
    <div>
        <div class="right-sidebar">
            <span @touchstart="changeVideoSpeed($event)">0.5X</span>
            <span @touchstart="changeVideoSpeed($event)">1.0X</span>
            <span @touchstart="changeVideoSpeed($event)">1.5X</span>
            <span @touchstart="changeVideoSpeed($event)">2.0X</span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        changeVideoSpeed(event){
            // console.log(typeof(event.target.innerHTML))
            let str = event.target.innerHTML
            let speedNum = Number(str.slice(0,3))
            // console.log(speedNum)
            this.$emit('speed',speedNum)
            // console.log(e)
        }
    },
}
</script>
<style lang="less" scoped>
.font-dpr(@font-size) { 
    font-size: @font-size; 
    [data-dpr="2"] & { font-size: @font-size * 2;} 
    [data-dpr="3"] & { font-size: @font-size * 3;}
}
.right-sidebar{
    position: absolute;
    z-index: 22;
    top: 0.7rem;
    right: 0rem;
    width: 2.5rem;
    height: 5.04rem;
    background-color: rgba(0, 0, 0, 0.5);
    span{
        text-align: center;
        line-height: 1.5rem;
        // font-size: 16px;
        .font-dpr(8px);
        color: white;
        display: inline-block;
        width:100%;
        height: 25%;
    }
}
</style>