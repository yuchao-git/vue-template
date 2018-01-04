<template>
    <div class="index">
        <div class="title">
            <div class="user" @mouseenter="userHover" @mouseleave="userOut">
                <div class="trusername">
                    <Icon type="person"></Icon>
                    <div class="name">{{userName}}</div>
                    <Icon type="android-arrow-dropdown-circle"></Icon>
                </div>
                <div class="dropmenu" v-show='isShow'>
                    <ul>
                        <li><Icon type="android-settings"></Icon><span>系统管理</span></li>
                        <li @click='removelocalStorage'><Icon type="ios-locked"></Icon><span>修改密码</span></li>
                        <li @click='removelocalStorage'><Icon type="power"></Icon><span>安全退出</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content clearfix">
            <div class="menu fl">
                <Menu width='160px' ref="leftMenu" theme='dark'>
                    <MenuGroup title="功能导航">
                        <MenuItem name="carManage">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/banner">轮播图设置</router-link>
                        </MenuItem>

                        <MenuItem name="driveManage">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/driveManage">会员管理</router-link>
                        </MenuItem>
                      
                        <MenuItem name="orderManage">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/orderManage">店铺管理</router-link>
                            
                        </MenuItem>
                         <MenuItem name="applyList">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/applyList">公告管理</router-link>
                            
                        </MenuItem>
                        <MenuItem name="runStatistical">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/runStatistical">运输统计</router-link>
                            
                        </MenuItem>
                        <MenuItem name="useStatistical">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/useStatistical">使用统计</router-link>
                        </MenuItem>
                        <MenuItem name="bulkImport">
                            <Icon type="chatbubbles"></Icon>
                            <router-link to="/index/bulkImport">批量导入</router-link> 
                        </MenuItem>
                    </MenuGroup>
                </Menu>
            </div>
            <div class="details">
                <div class="caption">
                    <Icon type="home"></Icon> &nbsp;<span>{{caption}}</span>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "index",
  mounted() {
    
    this.$refs.leftMenu.currentActiveName = this.$route.name;
    this.$store.commit('changeName','chengfanghua')
    console.log(this)
    // alert(this.$store.state.name)
  },
  watch: {
    $route() {
      this.caption = this.captionArr[this.$route.name];
    }
  },
  data() {
    return {
      userName: "",
      caption: "",
      captionArr: {
        carManage: "车辆管理",
        driveManage: "司机管理",
        bulkImport: "批量导入",
        orderManage: "派车单管理",
        runStatistical: "运行统计",
        useStatistical: "使用统计",
        applyList: "申请单列表"
      },
      isShow: false
    };
  },
  methods: {
    userHover() {
      this.isShow = true;
    },
    userOut() {
      this.isShow = false;
    },
    removelocalStorage() {
      localStorage.removeItem("jwt-token");
      localStorage.removeItem("user");
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style lang="css">
.index .title {
  height: 3.75rem;
  position: relative;
  z-index: 2;
  background: #069 url("/static/img/car.png") no-repeat 10px center;
}
.index .title .user {
  color: white;
  border-left: 1px dotted #5ba3d5;
  background: #327fb5;
  padding-top: 0.2rem;
  position: absolute;
  width: 5rem;
  height: 100%;
  right: 5px;
}
.index .title .user .trusername {
  text-align: center;
  font-size: 14px;
  height: 100%;
  padding: 0 1.5rem 0 0.5rem;
}
.index .title .user .trusername i {
  font-size: 26px;
}
.index .title .user .trusername i:nth-of-type(2) {
  font-size: 16px;
  position: absolute;
  top: 24px;
  right: 7px;
  color: #9cc;
}
.index .title .user .dropmenu {
  position: absolute;
}
.index .title .user .dropmenu ul {
  padding: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0 0 1px 1px #666;
  position: absolute;
  width: 120px;
  top: 100%;
  left: -40px;
}
.index .title .user .dropmenu li {
  line-height: 26px;
  font-size: 14px;
  cursor: pointer;
  color: #666;
}
.index .title .user .dropmenu li span {
  padding-left: 10px;
}
.index .content .menu {
  height: calc(100vh - 60px);
  background-color: #495060;
}
.index .content .menu .ivu-menu-item-group li {
  position: relative;
  padding: 0;
}
.index .content .menu .ivu-menu-item-group li i {
  position: absolute;
  line-height: 48px;
  left: 10px;
}
.index .content .menu a {
  display: block;
  line-height: 48px;
  padding-left: 35px;
  color: #eee;
}
.index .content .menu .router-link-active {
  color: white;
  background-color: #2d8cf0;
}
.index .content .menu .ivu-menu-item-active i {
  color: white;
}
.index .content .menu .ivu-menu-item-group-title {
  font-size: 17.5px;
  cursor: pointer;
  color: white;
}
.index .content .menu .ivu-menu-item-group-title:hover {
  color: #999;
}
.index .content .details {
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 0 1rem;
}
.index .content .details .caption {
  margin-bottom: 10px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  line-height: 39px;
  padding: 0 10px;
  font-size: 14px;
}
.index .content .details .searchbox {
  padding: 8px 10px;
  border: 1px solid #e4e4e4;
  background: #f6f6f6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.index .content .details .searchbox button {
  background-color: rgb(28, 184, 65);
  color: white;
  border: none;
  padding: 7px 14px;
  border-radius: 5px;
}
.index .content .details .searchbox button i {
  font-weight: 900;
  margin-right: 5px;
}
/* .index .content .menu .ivu-menu-item:not(.ivu-menu-item-active):hover{
       background-color: #d5ceff;
    }   */
</style>
