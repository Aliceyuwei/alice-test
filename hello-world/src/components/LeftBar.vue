<template>
    <div class="leftBar">
    LeftBar
    <!-- <router-link
        :to="{
            name: About,
        }"
    >
        About
    </router-link> -->
    <ul>
        <li v-for="(item, index) in list"
            :key="index"
        >
            <router-link
                :to="{
                    name: item.name,
                }"
            >
                {{item.name}}
            </router-link>
        </li>
    </ul>
    </div>
</template>

<script>
import config from '../config/webPage';
export default {
    name: 'LeftBar',
    data () {
        return {
            // 下拉選單們
            list: config.sideBar,
        };
    },
}
</script>
<style lang="scss" src="../css/sideBar/leftBar.scss"></style>
