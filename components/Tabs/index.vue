<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入登录邮箱/手机号"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入正确的邮箱或手机号"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="7天内自动登录" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="registor">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入注册邮箱/手机号"></el-input>
                </el-form-item>
                <el-form-item label="" prop="identifying">
                    <el-input v-model="ruleForm.identifying" placeholder="请输入验证码"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="同意慕课网注册协议" name="type">同意<a href="/123">《慕课网注册协议》</a></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
/**
 *  Created by 2018/8/22
 *  @author: sunyafei
 *  @description: 登录弹层内容
 *  @param:
 */

import './style.css'

export default {
    data() {
        return {
            activeName: 'login',
            ruleForm: {
                name: '',
                region: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入正确的邮箱或手机号', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                identifying: [
                    { required: true, message: '验证码错误', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
};
</script>
