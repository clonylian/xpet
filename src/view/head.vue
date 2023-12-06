<template>
       <div class="header">
            <div class="head_1">
                <div class="head_2">
                    <router-link to="/"></router-link>
                    <router-link  to="/Borrow">Borrow</router-link>
   <!-- <router-link @click="bian('ban1')" :class="{'head': biancolo === 'ban1'}">Borrow</router-link> -->
   <!-- <router-link @click="bian('ban2')" :class="{'head': biancolo === 'ban2'}">Convert</router-link> -->
                    <router-link to="/Convert">Convert</router-link>
                </div>
                <div class="head_3">
                    <div class="head_4">
                       
                        <p>0</p>
                       
                        <p>0</p>
                       
                        <p>0</p>
                        <div v-show="user" class="head_5">
                            <img src="../assets/5.png">
                            <div class="head_6">
                                <p class="head_7"><b>0xd94b...d681</b></p>
                                <p class="head_8">@lwnji129142</p>
                            </div>
                        </div>
                        <div @click="twitterlog" class="head_9">
                            login
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script  setup>

import { ref } from 'vue'
import hello from "hellojs/dist/hello.all";
import { defineProps, defineEmits } from 'vue'
const user = ref(false)
let activeTab = ref("tab1")
function changeTab(tab) {
    activeTab.value = tab;
}

let twitterlog = () => {
    hello.init(
        {
            twitter: "nrLuyfMeEWDiqMhVq11Jm3PTO",
        },
        {
            redirect_uri: "https://xpet.vercel.app/",
        }
    );
    hello("twitter")
        .login()
        .then(
            function (res) {
                console.log('success')
            },
            function (err) {
                console.log("err", err);
            }
        );
    hello.on("auth.login", (result) => {
        hello(result.network)
            .api("/me")
            .then(
                function (p) {
                    console.log(result, "result");
                },
                function (err) {
                    console.log("err", err);
                }
            );
    });
};

const props = defineProps({
  user: Boolean
})
const emits = defineEmits(['twitterlog'])

</script>
<style>

.header {
    width: 100%;
    /* margin: 0 auto; */
    padding: 1.5rem 0;
    display: flex;
    background-color: rgb(240, 243, 244);

}

.head_1 {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

}

.head_2 {
    display: flex;
    align-items: center;
}

.head_2 svg {
    width: 34px;
    height: 32px;
    margin-right: 1rem
}

.head_2 a {
    font-family: one;
    margin: 0 1.5rem;
    color: black;
    text-decoration: none;
}

.head_4 {
    display: flex;
    align-items: center;
}

.head_4 p {
    margin: 0 0.8rem;
}

.head_5 {
    display: flex;
    margin: 0 1rem;
    align-items: center
}

.head_5>img {
    width: 35px;
    height: 35px;
}

.head_7 {
    font-family: two;
    font-size: 16px;
    font-weight: 700;
}

.head_8 {
    font-size: 14px;
    font-family: two;
    color: rgb(86, 99, 112);
}

.head_9 {
    /* width: 6rem; */
    padding: 0.7rem 2rem;
    color: white;
    font-family: one;
    font-weight: 700;
    background-color: black;
    border-radius: 30px;
    margin-left: 1rem;
}

</style>