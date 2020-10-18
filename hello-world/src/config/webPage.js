export default {
    // 組件自身的設定
    componentConfig: {
        // 下拉選單式過濾
        selectFilter: {
            environment: [
                // {
                //     id: 0,
                //     val: 'all',
                //     textKey: '全部'
                // },
                {
                    id: 1,
                    val: 'prod',
                    textKey: '正式站'
                },
                {
                    id: 2,
                    val: 'qa',
                    textKey: '測試站'
                },
                {
                    id: 3,
                    val: 'dev',
                    textKey: '開發站'
                }
            ],
            category: [
                // {
                //     id: 0,
                //     val: 'all',
                //     textKey: '全部'
                // },
                {
                    id: 1,
                    val: 'member',
                    textKey: '客端'
                },
                {
                    id: 2,
                    val: 'trade',
                    textKey: '控端'
                },
                {
                    id: 3,
                    val: 'game',
                    textKey: '賽程中心'
                },
                {
                    id: 4,
                    val: 'master',
                    textKey: '廳主端'
                }
            ],
            webType: [
                // {
                //     id: 0,
                //     val: 'all',
                //     textKey: '全部'
                // },
                {
                    id: 1,
                    val: 'BB',
                    textKey: 'BB體育'
                },
                {
                    id: 2,
                    val: 'XBB',
                    textKey: 'XBB體育'
                },
                {
                    id: 3,
                    val: 'IM',
                    textKey: 'IM客制體育'
                }
            ],
            device: [
                // {
                //     id: 0,
                //     val: 'all',
                //     textKey: '全部'
                // },
                {
                    id: 1,
                    val: 'PC',
                    textKey: 'PC版'
                },
                {
                    id: 2,
                    val: 'MB',
                    textKey: '手機版'
                }
            ]
        }
    },
    sideBar: [
        {
            val: 0,
            name: 'About'
        },
        // {
        //     val: 1,
        //     textKey: '11'
        // },
        // {
        //     val: 2,
        //     textKey: '22'
        // },
    ],
    navTabList: [
        {
            val: 'env',
            textKey: '環境'
        },
        {
            val: 'feature',
            textKey: '功能'
        },
        {
            val: 'sportType',
            textKey: '體育種類'
        },
        // {
        //     val: 'dataBase',
        //     textKey: 'TEXT_DATA_BASE'
        // },
        {
            val: 'sportName',
            textKey: '名稱'
        },
        {
            val: 'url',
            textKey: '網址'
        }
    ],
    webData: [
        // bb
        {
            //  bbsport prod 賽程中心 http://soccer.vir888.com/
            environment: '正式站',
            category: '賽程中心',
            webType: 'BB體育',
            name: '賽程中心',
            envId: 1,
            webTypeId: 1,
            categoryId: 3,
            url: 'http://soccer.vir888.com/'
        },
        {
            //  bbsport qa 賽程中心 http://soccer.vir999.net/
            environment: '測試站',
            category: '賽程中心',
            webType: 'BB體育',
            name: '賽程中心',
            envId: 2,
            webTypeId: 1,
            categoryId: 3,
            url: 'http://soccer.vir999.net/'
        },
        {
            //  bbsport dev 賽程中心 http://soccer-dev.vir888.com/
            environment: '開發站',
            category: '賽程中心',
            webType: 'BB體育',
            name: '賽程中心',
            envId: 3,
            webTypeId: 1,
            categoryId: 3,
            url: 'http://soccer-dev.vir888.com/'
        },
        {
            //  bbsport prod 大球控端 http://122.146.153.79/
            environment: '正式站',
            category: '控端',
            webType: 'BB體育',
            name: '大球控端',
            envId: 1,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://122.146.153.79/'
        },
        {
            //  bbsport qa 大球控端 http://ball-c.vir777.net/
            environment: '測試站',
            category: '控端',
            webType: 'BB體育',
            name: '大球控端',
            envId: 2,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://ball-c.vir777.net/'
        },
        {
            //  bbsport dev 大球控端 http://ball-c-dev.vir888.com/
            environment: '開發站',
            category: '控端',
            webType: 'BB體育',
            name: '大球控端',
            envId: 3,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://ball-c-dev.vir888.com/'
        },
        {
            //  bbsport prod 大球 PORTAL 控端 https://ctl-v2.vir000.com/
            environment: '正式站',
            category: '控端',
            webType: 'BB體育',
            name: '大球 PORTAL 控端',
            envId: 1,
            webTypeId: 1,
            categoryId: 2,
            url: 'https://ctl-v2.vir000.com/'
        },
        {
            //  bbsport qa 大球 PORTAL 控端 http://portal-c.vir777.net/
            environment: '測試站',
            category: '控端',
            webType: 'BB體育',
            name: '大球 PORTAL 控端',
            envId: 2,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://portal-c.vir777.net/'
        },
        {
            //  bbsport dev 大球 PORTAL 控端 http://portal-c-dev.vir888.com/
            environment: '開發站',
            category: '控端',
            webType: 'BB體育',
            name: '大球 PORTAL 控端',
            envId: 3,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://portal-c-dev.vir888.com/'
        },
        {
            //  bbsport prod 跟盤管理 http://follow.ac101.net/fl/
            environment: '正式站',
            category: '控端',
            webType: 'BB體育',
            name: '跟盤管理',
            envId: 1,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://follow.ac101.net/fl/'
        },
        {
            //  bbsport qa 跟盤管理 http://follow.vir999.net/fl
            environment: '測試站',
            category: '控端',
            webType: 'BB體育',
            name: '跟盤管理',
            envId: 2,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://follow.vir999.net/fl'
        },
        {
            //  bbsport dev 跟盤管理 http://follow-dev.vir888.com/fl
            environment: '開發站',
            category: '控端',
            webType: 'BB體育',
            name: '跟盤管理',
            envId: 3,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://follow-dev.vir888.com/fl'
        },
        {
            //  bbsport prod IPL 控端 https://admin.vir000.com/
            environment: '正式站',
            category: '控端',
            webType: 'BB體育',
            name: 'IPL 控端',
            envId: 1,
            webTypeId: 1,
            categoryId: 2,
            url: 'https://admin.vir000.com/'
        },
        {
            //  bbsport qa IPL 控端 https://admin.vir777.net/login
            environment: '測試站',
            category: '控端',
            webType: 'BB體育',
            name: 'IPL 控端',
            envId: 2,
            webTypeId: 1,
            categoryId: 2,
            url: 'https://admin.vir777.net/login'
        },
        {
            //  bbsport dev IPL 控端 http://admin.vir888.com/login
            environment: '開發站',
            category: '控端',
            webType: 'BB體育',
            name: 'IPL 控端',
            envId: 3,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://admin.vir888.com/login'
        },
        {
            //  bbsport prod esball 廳主端 http://hall-dev.vir888.com/?tpl=esball
            environment: '正式站',
            category: '廳主端',
            webType: 'BB體育',
            name: 'esball 廳主端',
            envId: 1,
            webTypeId: 1,
            categoryId: 4,
            url: 'http://hall-dev.vir888.com/?tpl=esball'
        },
        {
            //  bbsport qa esball 廳主端 https://hall.vir999.net/vi/login
            environment: '測試站',
            category: '廳主端',
            webType: 'BB體育',
            name: 'esball 廳主端',
            envId: 2,
            webTypeId: 1,
            categoryId: 4,
            url: 'https://hall.vir999.net/vi/login'
        },
        {
            //  bbsport prod esball 管端 http://ag-dev.vir888.com/?tpl=esball
            environment: '正式站',
            category: '控端',
            webType: 'BB體育',
            name: 'esball 管端',
            envId: 1,
            webTypeId: 1,
            categoryId: 2,
            url: 'http://ag-dev.vir888.com/?tpl=esball'
        },
        {
            //  bbsport qa esball 管端 https://ag.vir999.net/vi/login
            environment: '測試站',
            category: '控端',
            webType: 'BB體育',
            name: 'esball 管端',
            envId: 2,
            webTypeId: 1,
            categoryId: 2,
            url: 'https://ag.vir999.net/vi/login'
        },
        {
            //  bbsport prod esball 客端 http://esball.net/
            environment: '正式站',
            category: '客端',
            webType: 'BB體育',
            name: 'esball 客端',
            envId: 1,
            webTypeId: 1,
            categoryId: 1,
            url: 'http://esball.net/'
        },
        {
            //  bbsport qa esball 客端 http://www.vir999.net/?tpl=esball
            environment: '測試站',
            category: '客端',
            webType: 'BB體育',
            name: 'esball 客端',
            envId: 2,
            webTypeId: 1,
            categoryId: 1,
            url: 'http://www.vir999.net/?tpl=esball'
        },
        // xbb
        {
            // xbb prod asia365 客端 https://asia365s.com/CE3CC7/#/
            environment: '正式站',
            category: '客端',
            webType: 'XBB體育',
            name: 'asia365 客端',
            envId: 1,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://asia365s.com/CE3CC7/#/'
        },
        {
            // xbb qa asia365 客端 https://m-qa.xbbsports.com/CE3CC7/#/
            environment: '測試站',
            category: '客端',
            webType: 'XBB體育',
            name: 'asia365 客端',
            envId: 2,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://m-qa.xbbsports.com/CE3CC7/#/'
        },
        {
            // xbb dev asia365 客端 http://m-dev.xbbsports.asia/CE3CC7/#/
            environment: '開發站',
            category: '客端',
            webType: 'XBB體育',
            name: 'asia365 客端',
            envId: 3,
            webTypeId: 2,
            categoryId: 1,
            url: 'http://m-dev.xbbsports.asia/CE3CC7/#/'
        },
        {
            // xbb prod crown365 客端 https://asia365s.com/212B3D/#/
            environment: '正式站',
            category: '客端',
            webType: 'XBB體育',
            name: 'crown365 客端',
            envId: 1,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://asia365s.com/212B3D/#/'
        },
        {
            // xbb qa crown365 客端 https://m-qa.xbbsports.com/212B3D/#/
            environment: '測試站',
            category: '客端',
            webType: 'XBB體育',
            name: 'crown365 客端',
            envId: 2,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://m-qa.xbbsports.com/212B3D/#/'
        },
        {
            // xbb dev crown365 客端 http://m-dev.xbbsports.asia/212B3D/#/
            environment: '開發站',
            category: '客端',
            webType: 'XBB體育',
            name: 'crown365 客端',
            envId: 3,
            webTypeId: 2,
            categoryId: 1,
            url: 'http://m-dev.xbbsports.asia/212B3D/#/'
        },
        {
            // xbb prod vx88 客端 https://asia365s.com/5CA128/#/
            environment: '正式站',
            category: '客端',
            webType: 'XBB體育',
            name: 'vx88 客端',
            envId: 1,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://asia365s.com/5CA128/#/'
        },
        {
            // xbb qa vx88 客端 https://m-qa.xbbsports.com/5CA128/#/
            environment: '測試站',
            category: '客端',
            webType: 'XBB體育',
            name: 'vx88 客端',
            envId: 2,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://m-qa.xbbsports.com/5CA128/#/'
        },
        {
            // xbb dev vx88 客端 http://m-dev.xbbsports.asia/5CA128/#/
            environment: '開發站',
            category: '客端',
            webType: 'XBB體育',
            name: 'vx88 客端',
            envId: 3,
            webTypeId: 2,
            categoryId: 1,
            url: 'http://m-dev.xbbsports.asia/5CA128/#/'
        },
        {
            // xbb prod yabosport 客端 https://asia365s.com/223B2D/#/
            environment: '正式站',
            category: '客端',
            webType: 'XBB體育',
            name: 'yabosport 客端',
            envId: 1,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://asia365s.com/223B2D/#/'
        },
        {
            // xbb qa yabosport 客端 https://m-qa.xbbsports.com/223B2D/#/
            environment: '測試站',
            category: '客端',
            webType: 'XBB體育',
            name: 'yabosport 客端',
            envId: 2,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://m-qa.xbbsports.com/223B2D/#/'
        },
        {
            // xbb dev yabosport 客端 http://m-dev.xbbsports.asia/223B2D/#/
            environment: '開發站',
            category: '客端',
            webType: 'XBB體育',
            name: 'yabosport 客端',
            envId: 3,
            webTypeId: 2,
            categoryId: 1,
            url: 'http://m-dev.xbbsports.asia/223B2D/#/'
        },
        {
            // xbb prod bbsport 客端 https://asia365s.com/A25164/#/
            environment: '正式站',
            category: '客端',
            webType: 'XBB體育',
            name: 'bbsport 客端',
            envId: 1,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://asia365s.com/A25164/#/'
        },
        {
            // xbb qa bbsport 客端 https://m-qa.xbbsports.com/A25164/#/
            environment: '測試站',
            category: '客端',
            webType: 'XBB體育',
            name: 'bbsport 客端',
            envId: 2,
            webTypeId: 2,
            categoryId: 1,
            url: 'https://m-qa.xbbsports.com/A25164/#/'
        },
        {
            // xbb dev bbsport 客端 http://m-dev.xbbsports.asia/A25164/#/
            environment: '開發站',
            category: '客端',
            webType: 'XBB體育',
            name: 'bbsport 客端',
            envId: 3,
            webTypeId: 2,
            categoryId: 1,
            url: 'http://m-dev.xbbsports.asia/A25164/#/'
        },
        {
            // xbb prod 控端 https://td.xbbsports168.com/index.html#/login
            environment: '正式站',
            category: '控端',
            webType: 'XBB體育',
            name: '控端',
            envId: 1,
            webTypeId: 2,
            categoryId: 2,
            url: 'https://td.xbbsports168.com/index.html#/login'
        },
        {
            // xbb qa 控端 https://td-qa.xbbsports.com/index.html#/
            environment: '測試站',
            category: '控端',
            webType: 'XBB體育',
            name: '控端',
            envId: 2,
            webTypeId: 2,
            categoryId: 2,
            url: 'https://td-qa.xbbsports.com/index.html#/'
        },
        {
            // xbb dev 控端 http://td-dev.xbbsports.asia/index.html#/
            environment: '開發站',
            category: '控端',
            webType: 'XBB體育',
            name: '控端',
            envId: 3,
            webTypeId: 2,
            categoryId: 2,
            url: 'http://td-dev.xbbsports.asia/index.html#/'
        },
        {
            // xbb prod 賽程 hhttps://gc.xbbsports168.com/index.html#/login
            environment: '正式站',
            category: '賽程中心',
            webType: 'XBB體育',
            name: '賽程',
            envId: 1,
            webTypeId: 2,
            categoryId: 3,
            url: 'https://gc.xbbsports168.com/index.html#/login'
        },
        {
            // xbb qa 賽程 https://gc-qa.xbbsports.com/#/login
            environment: '測試站',
            category: '賽程中心',
            webType: 'XBB體育',
            name: '賽程',
            envId: 2,
            webTypeId: 2,
            categoryId: 3,
            url: 'https://gc-qa.xbbsports.com/#/login'
        },
        {
            // xbb dev 賽程 http://gc-dev.xbbsports.asia/#/
            environment: '開發站',
            category: '賽程中心',
            webType: 'XBB體育',
            name: '賽程',
            envId: 3,
            webTypeId: 2,
            categoryId: 3,
            url: 'http://gc-dev.xbbsports.asia/#/'
        },
        {
            // xbb prod 平台控端 https://ctl.xbbsports168.com/#/login
            environment: '正式站',
            category: '控端',
            webType: 'XBB體育',
            type: 'Tequila',
            name: '平台控端',
            envId: 1,
            webTypeId: 2,
            categoryId: 2,
            url: 'https://ctl.xbbsports168.com/#/login'
        },
        {
            // xbb qa 平台控端 https://ctl-qa.xbbsports.com/#/login
            environment: '測試站',
            category: '控端',
            webType: 'XBB體育',
            type: 'Tequila',
            name: '平台控端',
            envId: 2,
            webTypeId: 2,
            categoryId: 2,
            url: 'https://ctl-qa.xbbsports.com/#/login'
        },
        {
            // xbb dev 平台控端 http://ctl-dev.xbbsports.asia/#/login
            environment: '開發站',
            category: '控端',
            webType: 'XBB體育',
            type: 'Tequila',
            name: '平台控端',
            envId: 3,
            webTypeId: 2,
            categoryId: 2,
            url: 'http://ctl-dev.xbbsports.asia/#/login'
        },
        // IM
        // dev 威尼斯人
        {
            // IM prod 威尼斯人 會員端 https://wstt.66chile.com
            environment: '正式站',
            category: '客端',
            webType: 'IM客制體育',
            name: '威尼斯人',
            envId: 1,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://wstt.66chile.com'
        },
        {
            // IM qa 威尼斯人 會員端 https://wsws.66boxing.com
            environment: '測試站',
            category: '客端',
            webType: 'IM客制體育',
            name: '威尼斯人',
            envId: 2,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://wsws.66boxing.com'
        },
        {
            // IM prod 威尼斯人 廳主端 https://wstt.88relish.com
            environment: '正式站',
            category: '廳主端',
            webType: 'IM客制體育',
            name: '威尼斯人',
            envId: 1,
            webTypeId: 3,
            categoryId: 4,
            url: 'https://wstt.88relish.com'
        },
        {
            // IM qa 威尼斯人 廳主端 https://wsws.66polo.com
            environment: '測試站',
            category: '廳主端',
            webType: 'IM客制體育',
            name: '威尼斯人',
            envId: 2,
            webTypeId: 3,
            categoryId: 4,
            url: 'https://wsws.66polo.com'
        },
        // m6app 必博
        {
            // IM prod 必博 會員端 - Demo廳 https://77ts.77boxing.com/
            environment: '正式站',
            category: '客端',
            webType: 'IM客制體育',
            name: '必博',
            envId: 1,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://77ts.77boxing.com/'
        },
        {
            // IM qa 必博 會員端 https://bb7.66boxing.com
            environment: '測試站',
            category: '客端',
            webType: 'IM客制體育',
            name: '必博',
            envId: 2,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://bb7.66boxing.com'
        },
        {
            // IM qa 必博 廳主端 https://bb7.66polo.com/
            environment: '測試站',
            category: '廳主端',
            webType: 'IM客制體育',
            name: '必博',
            envId: 2,
            webTypeId: 3,
            categoryId: 4,
            url: 'https://bb7.66polo.com/'
        },
        // yabolive 亞博直播
        {
            // IM qa 亞博直播 廳主端  https://yb01.66polo.com
            environment: '測試站',
            category: '廳主端',
            webType: 'IM客制體育',
            name: '亞博直播',
            envId: 2,
            webTypeId: 3,
            categoryId: 4,
            url: 'https://yb01.66polo.com'
        },
        {
            // IM prod 亞博直播 會員端  https://yb0t.66relish.com/
            environment: '正式站',
            category: '客端',
            webType: 'IM客制體育',
            name: '亞博直播',
            envId: 1,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://yb0t.66relish.com/'
        },
        {
            // IM qa 亞博直播 會員端  https://yb01.66boxing.com
            environment: '測試站',
            category: '客端',
            webType: 'IM客制體育',
            name: '亞博直播',
            envId: 2,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://yb01.66boxing.com'
        },
        {
            // IM prod 亞博直播 會員端 (直連遊戲頁)  https://yb0t.66relish.com/exsport/live?hall=67
            environment: '正式站',
            category: '客端',
            webType: 'IM客制體育',
            name: '亞博直播(直連遊戲頁)',
            envId: 1,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://yb0t.66relish.com/exsport/live?hall=67'
        },
        {
            // IM qa 亞博直播 會員端 (直連遊戲頁)  https://yb01.66boxing.com/exsport/live?hall=500015
            environment: '測試站',
            category: '客端',
            webType: 'IM客制體育',
            name: '亞博直播(直連遊戲頁)',
            envId: 2,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://yb01.66boxing.com/exsport/live?hall=500015'
        },
        {
            // IM prod 亞博直播 會員端 對應頁  https://yb0t.66relish.com/exsport/backstage/?secret=f76977d146f9c87f1a09
            environment: '正式站',
            category: '客端',
            webType: 'IM客制體育',
            name: '亞博直播 對應頁',
            envId: 1,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://yb0t.66relish.com/exsport/backstage/?secret=f76977d146f9c87f1a09'
        },
        {
            // IM qa 亞博直播 會員端 對應頁  https://yb01.66boxing.com/exsport/backstage/?secret=f76977d146f9c87f1a09
            environment: '測試站',
            category: '客端',
            webType: 'IM客制體育',
            name: '亞博直播 會員端 對應頁',
            envId: 2,
            webTypeId: 3,
            categoryId: 1,
            url: 'https://yb01.66boxing.com/exsport/backstage/?secret=f76977d146f9c87f1a09'
        }
        // bblivem 焦點直播
        // {}
    ]
};
