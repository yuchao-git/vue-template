<template>
    <div class="login">
        <div class="title">
            商城管理系统
        </div>
        <div class="user">
            
            <div class="label"><label>用户名:</label></div>
            <div class="account"><span><input v-model="user.uid" placeholder='请输入账号' type="text"></span></div>
            <div class="label"><label>密码:</label></div>
            <div class="password"><span><input v-model="user.passwd" placeholder='请输入密码' type="password"></span></div>
            <div class="submit">
                <Button @click="login" type="primary" long>登录</Button>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'login',
        created(){
            if(!!localStorage.getItem('jwt-token')){
                this.$router.push({ path: '/'})
            }
        },
        data () {
            return {
                user:{
                    uid:'',
                    passwd:''
                } 
            }
        },
        methods:{
            login(){
                if(this.user.uid&&this.user.passwd){
                    $.ajax(
                        {
                        url:'http://em.cqxz.gugud.com/api/v1/auth',
                        cache:false,
                        type:'POST',
                        data:this.user,
                        dataType:'json',
                        success:(e)=> {
                            localStorage.setItem('jwt-token',e.token);
                            localStorage.setItem('user',this.user.uid);
                            this.$router.push({ path: '/index/carManage'})
                        }
                        }
                    )
                    
                }else{
                    alert('请输入账号密码');
                }
            }
        }
    }
</script>
<style lang="css" scoped>
    .login{
        margin: 0 auto;
        margin-top: 150px;
        padding-bottom: 15px;
        width: 300px;
        height: 265px;
        -webkit-box-shadow: 0 0 10px #ccc;
        -moz-box-shadow: 0 0 10px #ccc;
        box-shadow: 0 0 10px #ccc;
        border-radius: 10px;
        overflow: hidden;
    }
    .login .title{
        height: 3.75rem;
        line-height: 3.75rem;
        color: white;
        font-size: 1rem;
        padding-left: 15px;
        background-color: #069; 
    }
    .login .user{
        padding: 0 25px;
    }
    .login .user .label{
        text-align: left;
        line-height: 1.8rem;
        font-weight: 900;
        font-size: 14px;
    }
    .login .user .account,.password{
        line-height: 30px;
    }
    .login .user .account,.password span{
        display: inline-block;
        width: 100%;
    }
    .login .user input{
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        margin-bottom: 1rem;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
    .login .user button{
        display: block;
        font-size: 14px;
        line-height: 1.42857143;
        white-space: nowrap;
        vertical-align: middle;
        background-color: #337ab7;
        border-color: #2e6da4;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
    }
</style>
