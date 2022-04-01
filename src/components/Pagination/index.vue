<template>
  <!-- 分页器 -->
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev disabled" @click="$emit('getPageNo',pageNo - 1)">
          <a href="#">«上一页</a>
        </li>
        <li :class="{active:pageNo == 1}" v-if="startEnd.start > 1 " @click="$emit('getPageNo',1)">
          <a href="#">1</a>
        </li>
        <li :class="{active:pageNo == 2}" v-if="startEnd.start > 2 " @click="$emit('getPageNo',2)">
          <a href="#">2</a>
        </li>
        <li class="dotted" v-if="startEnd.start > 3"><span>...</span></li>
        <li v-for="(page,index) in startEnd.end" :key="index"  @click="getPageNo(page)" v-if="page>=startEnd.start" :class="{active:pageNo == page}">
          <a href="#">{{page}}</a>
        </li>
        <li class="dotted" v-if="startEnd.end < pageNum - 1"><span>...</span></li>
        <li v-if="startEnd.end != pageNum" @click="$emit('getPageNo',pageNum)">
          <a href="#">{{ pageNum }}</a>
        </li>
        <li class="dotted" ><span>当前页：{{pageNo}}页</span></li>
        <li class="next" @click="$emit('getPageNo',pageNo + 1)">
          <a href="#">下一页»</a>
        </li>

      </ul>
      <div>
        <span>共{{ pageNum }}页&nbsp;</span>
            {{startEnd}}

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total"],
  data(){
      return{
          
      }
  },
  computed: {
    pageNum() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd(){
        let start = 1
        let end = 2
        if(this.pageNum < 5) {
            start = 1
            end = this.pageNum
        } else if(this.pageNo <= 2) {
            start = 1
            end = 5
        } else if(this.pageNo >this.pageNum - 2 ){
            start = this.pageNum - 4
            end = this.pageNum 
        }
        else {
            start = this.pageNo - 2
            end = this.pageNo + 2
        }
        return {start,end}
    },
   
  },
  methods:{
    getPageNo(page){
      this.$emit('getPageNo',page)
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  width: 1533px;
  height: 66px;
  overflow: hidden;
  float: left;

  .sui-pagination {
    margin: 18px 0;

    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      width: 1000px;
      float: left;

      li {
        line-height: 18px;
        display: inline-block;
        img {
          width: 60px;
          height: 60px;
        }
        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }

    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
}
</style>