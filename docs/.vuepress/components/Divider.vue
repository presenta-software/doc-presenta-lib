<template>
    <div class="divider">
    </div>
</template>


<script>
export default {
    mounted(){
        this.$el.addEventListener('mousedown', this.onDown)
    },
    beforeDestroy(){

    },
    data(){
        return{
            ix:0,
            cx:0
        }
    },
    methods:{
        onDown(e){
            this.ix = e.clientX
            document.addEventListener('mousemove', this.onMove)
            document.addEventListener('mouseup', this.onUp)
            this.$emit('begin')
        },
        onMove(e){
            this.cx = e.clientX
            var diff = this.ix - this.cx
            this.$emit('update', diff)
        },
        onUp(e){
            document.removeEventListener('mousemove', this.onMove)
            document.removeEventListener('mouseup', this.onUp)
        }
    }
}
</script>


<style scoped>
.divider{
    --dividerWidth: 5px;
    width: var(--dividerWidth);
    min-width: var(--dividerWidth);
    max-width: var(--dividerWidth);
    background-color: #ddd;
    cursor:col-resize;
}
.divider:hover{
    background-color: #ccc;
}
</style>