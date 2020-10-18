<template>
    <div class="website">
        <div class="website-data">
            <div class="header-block">
                <div class="search-area clearfix">
                    <div class="select-type">
                        <div class="title">環境</div>
                        <div
                            class="selector"
                            tabindex="1"
                            @blur="envOpen = false"
                            :class="{ active: searchENVText, open: envOpen }"
                            @click="envOpen = !envOpen"
                        >
                            <div class="input">
                                <span>{{searchENVText || '請選擇'}}</span>
                            </div>
                            <div v-show="envOpen" class="dropDown">
                                <ul v-if="env.length > 0">
                                    <li
                                        v-for="(env, index) in env"
                                        @click.stop="selectENV(env)"
                                        :title="env.textKey"
                                        :key="index"
                                    >
                                        {{ env.textKey }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="select-type">
                        <div class="title">遊戲類別</div>
                        <div
                            class="selector"
                            tabindex="1"
                            @blur="sportOpen = false"
                            :class="{ active: searchSportTypeText, open: sportOpen }"
                            @click="sportOpen = !sportOpen"
                        >
                            <div class="input">
                                <span>{{searchSportTypeText || '請選擇'}}</span>
                            </div>
                            <div v-show="sportOpen" class="dropDown">
                                <ul v-if="webType.length > 0">
                                    <li
                                        v-for="(webType, index) in webType"
                                        @click.stop="selectSport(webType)"
                                        :title="webType.textKey"
                                        :key="index"
                                    >
                                        {{ webType.textKey }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="select-type">
                        <div class="title">功能</div>
                        <div
                            class="selector"
                            tabindex="1"
                            @blur="featureOpen = false"
                            :class="{ active: searchFeatureText, open: featureOpen }"
                            @click="featureOpen = !featureOpen"
                        >
                            <div class="input">
                                <span>{{searchFeatureText || '請選擇'}}</span>
                            </div>
                            <div v-show="featureOpen" class="dropDown">
                                <ul v-if="category.length > 0">
                                    <li
                                        v-for="(category, index) in category"
                                        @click.stop="selectFeature(category)"
                                        :title="category.textKey"
                                        :key="index"
                                    >
                                        {{ category.textKey }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- filteredTableData{{filteredTableData}} -->
                <div class="total">
                    共 
                    <!-- <span v-if="dataBase.length===0">{{webData.length}}</span>
                    <span v-else>{{dataBase.length}}</span> -->
                    <span>{{filteredTableData.length}}</span>
                    筆資料
                </div>
            </div>
            <div class="outer">
                <div class="wrap">
                    <div class="table">
                        <div class="tableHead">
                            <div
                                v-for="(match, index) in tableHead"
                                :key="index" class="box"
                                :class="`${match.val}`"
                            >
                                <span>{{ match.textKey }}</span>
                                <span @click="sortUp()">^</span>
                                <span @click="sortDown()">#</span>
                            </div>
                        </div>
                        <div class="tableContent">
                            <div v-if="filteredTableData.length !==0" class="data">
                                <div class="detail" v-for="(match, index) in filteredTableData" :key="index">
                                    <div class="box env">
                                        <span>{{ match.environment }}</span>
                                    </div>
                                    <div class="box sportType">
                                        <span>{{ match.category }}</span>
                                    </div>
                                    <div class="box feature">
                                        <span>{{ match.webType }}</span>
                                    </div>
                                    <div class="box sportName">
                                        <span>{{ match.name }}</span>
                                    </div>
                                    <div class="box url">
                                        <span class="url-herf" @click="directToPage(match.url)">{{ match.url }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="none">
                                無資料
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../config/webPage';

export default {
    data () {
        return {
            // 下拉選單們
            env: config.componentConfig.selectFilter.environment,
            category: config.componentConfig.selectFilter.category,
            webType: config.componentConfig.selectFilter.webType,

            // 下拉選單們開關們
            onOpen: false,
            envOpen: false,
            sportOpen: false,
            featureOpen: false,
            // 下拉框內文字們
            searchENVText: '',
            searchSportTypeText: '',
            searchFeatureText: '',

            tableHead: config.navTabList,
            webData: config.webData,

            // dataBase: [], // 篩選過的資料
            envArr: [], // 現在選擇的環境選單的篩選出來的資料
            envKey: {}, // 現在選擇的環境選單的資料
            sportArr: [], // 現在選擇的遊戲選單的篩選出來的資料
            sportKey: {}, // 現在選擇的遊戲選單的的資料
            featureArr: [], // 現在選擇的功能選單的篩選出來的資料
            featureKey: {}  // 現在選擇的功能選單的資料
        };
    },
    watch: {},
    computed: {
        filteredTableData () {
            const {
                webData,
                searchENVText,
                searchSportTypeText,
                searchFeatureText,
                envArr,
                sportArr,
                featureArr,
                envKey,
                sportKey,
                featureKey
            } = this;
            const hasEnvFilter = !searchENVText;
            const hasSportTypeFilter = !searchSportTypeText;
            const hasFeatureFilter = !searchFeatureText;
            if(!hasEnvFilter || !hasSportTypeFilter || !hasFeatureFilter) {
                if (!hasEnvFilter) { // selectENV
                    if (sportArr.length === 0 && featureArr.length === 0) {
                        return webData.filter(item => {
                            return item.environment === searchENVText;
                        });
                    } else {
                        if (featureArr.length === 0) {
                            return webData.filter(item => {
                                return item.environment === searchENVText;
                            }).filter(item => {
                                return item.webType === sportKey.textKey;
                            }); 
                        } else if (sportArr.length === 0) {
                            return webData.filter(item => {
                                return item.environment === searchENVText;
                            }).filter(item => {
                                return item.category === featureKey.textKey;
                            });
                        } else {
                            // sort
                            // console.log(
                            //     webData.filter(item => {
                            //         return item.webType === sportKey.textKey;
                            //     }).filter(item => {
                            //         return item.category === featureKey.textKey;
                            //     }).sort(function(a, b) {return a.envId - b.envId;})
                            // )
                            return webData.filter(item => {
                                return item.environment === searchENVText;
                            }).filter(item => {
                                return item.webType === sportKey.textKey;
                            }).filter(item => {
                                return item.category === featureKey.textKey;
                            });
                        }
                    }
                }
                if (!hasSportTypeFilter) { // selectSport
                    if (envArr.length === 0 && featureArr.length === 0) {
                        return webData.filter(item => {
                            return item.webType === searchSportTypeText;
                        });
                    } else {
                        if (envArr.length === 0) {
                            return webData.filter(item => {
                                return item.webType === searchSportTypeText;
                            }).filter(item => {
                                return item.category === featureKey.textKey;
                            });
                        } else if (featureArr.length === 0) {
                            return webData.filter(item => {
                                return item.webType === searchSportTypeText;
                            }).filter(item => {
                                return item.environment === envKey.textKey;
                            });
                        } else {
                            return webData.filter(item => {
                                return item.webType === searchSportTypeText;
                            }).filter(item => {
                                return item.category === featureKey.textKey;
                            }).filter(item => {
                                return item.environment === envKey.textKey;
                            });
                        }
                    }
                }
                if (!hasFeatureFilter) { // selectFeature
                    if (envArr.length === 0 && sportArr.length === 0) {
                        return webData.filter(item => {
                            return item.category === searchFeatureText;
                        });
                    } else {
                        if (envArr.length === 0) {
                            return webData.filter(item => {
                                return item.category === searchFeatureText;
                            }).filter(item => {
                                return item.webType === sportKey.textKey;
                            });
                        } else if (sportArr.length === 0) {
                            return webData.filter(item => {
                                return item.category === searchFeatureText;
                            }).filter(item => {
                                return item.environment === envKey.textKey;
                            });
                        } else {
                            return webData.filter(item => {
                                return item.category === searchFeatureText;
                            }).filter(item => {
                                return item.webType === sportKey.textKey;
                            }).filter(item => {
                                return item.environment === envKey.textKey;
                            });
                        }
                    }
                }
            }
            
            return webData;
        }
    },
    methods: {
        selectENV (val) {
            this.envKey = val;
            this.searchENVText = val.textKey;
            this.envArr = this.webData.filter(item => {
                return item.environment === val.textKey;
            });
        },
        selectSport (val) {
            this.sportKey = val;
            this.searchSportTypeText = val.textKey;
            this.sportArr = this.webData.filter(item => {
                return item.webType === val.textKey;
            });
        },
        selectFeature (val) {
            this.featureKey = val;
            this.searchFeatureText = val.textKey;
            this.featureArr = this.webData.filter(item => {
                return item.category === val.textKey;
            });
        },
        sortUp() {
            
        },
        sortDown() {},
        directToPage (val) {
            window.open(val, '_blank');
        }
    }
};
</script>
<style lang="scss" src="../css/views/About.scss"></style>
