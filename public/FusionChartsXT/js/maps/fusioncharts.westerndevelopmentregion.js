(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=666)})({666:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(667);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},667:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.WesternDevelopmentRegion.1.01-17-2017 01:35:02
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"WesternDevelopmentRegion",revision:1,standaloneInit:true,baseWidth:600,baseHeight:532,baseScaleFactor:10,entities:{"NP.WE.GA":{outlines:[[M,4013,1291,Q,4006,1288,3966,1288,3922,1288,3907,1286,3899,1285,3862,1264,3826,1243,3813,1233,3775,1205,3706,1200,3686,1199,3675,1187,3630,1204,3586,1216,3542,1227,3538,1227,3535,1227,3512,1229,3488,1230,3455,1227,3422,1223,3412,1223,3363,1223,3356,1271,3354,1284,3354,1319,3350,1331,3337,1338,L,3316,1346,Q,3298,1352,3277,1371,3261,1385,3252,1398,3209,1446,3188,1446,3171,1446,3119,1402,3068,1354,3060,1348,L,3051,1348,Q,3049,1354,3037,1379,3026,1402,3024,1410,3021,1423,3021,1443,3020,1462,3003,1475,2990,1485,2943,1503,2918,1513,2907,1546,2874,1631,2785,1654,2745,1664,2733,1675,2711,1693,2711,1739,2711,1765,2740,1791,2781,1829,2794,1849,2801,1856,2819,1870,2840,1888,2840,1901,2840,1915,2794,1927,2749,1938,2728,1954,2707,1970,2691,1988,2675,2006,2675,2029,2675,2047,2698,2082,2721,2118,2721,2136,2721,2163,2662,2207,2592,2260,2577,2283,2537,2343,2524,2368,2504,2408,2494,2467,2494,2469,2494,2470,2492,2480,2476,2488,2458,2496,2458,2500,2458,2501,2492,2530,2528,2566,2537,2592,2538,2596,2541,2626,2544,2653,2549,2662,L,2568,2686,Q,2587,2712,2587,2722,2587,2734,2577,2746,2567,2758,2567,2766,2567,2786,2591,2806,2599,2813,2621,2827,2645,2840,2673,2847,2689,2854,2689,2876,L,2689,2897,Q,2688,2906,2680,2914,2657,2947,2644,2947,2639,2947,2551,2917,2529,2917,2527,2967,2527,2992,2529,3025,2524,3049,2526,3092,2523,3125,2494,3146,2492,3148,2490,3150,2477,3162,2456,3179,2438,3198,2438,3220,2438,3233,2456,3250,2474,3267,2474,3279,2474,3281,2445,3316,2414,3354,2410,3368,2406,3381,2401,3422,2393,3457,2370,3469,2342,3480,2324,3487,2290,3501,2270,3513,2240,3533,2218,3540,2176,3545,2155,3549,2144,3555,2131,3561,2087,3576,2051,3574,2015,3572,1994,3572,1974,3573,1951,3573,1928,3573,1912,3574,1895,3574,1881,3582,1867,3589,1845,3612,1833,3623,1815,3652,1796,3680,1799,3693,1801,3706,1863,3706,1925,3706,1996,3701,2067,3696,2109,3691,2150,3685,2167,3693,2183,3701,2231,3746,2233,3747,2249,3772,2263,3795,2273,3795,2285,3795,2318,3765,2351,3734,2360,3734,2378,3734,2401,3748,2412,3755,2438,3774,2453,3787,2485,3789,2529,3793,2537,3795,2558,3801,2580,3815,2592,3823,2612,3838,2638,3855,2660,3869,2674,3876,2702,3876,2725,3876,2753,3864,2780,3852,2817,3852,2822,3852,2942,3877,3073,3902,3127,3905,3147,3906,3214,3904,3277,3903,3318,3905,3339,3906,3396,3923,3453,3939,3471,3939,3499,3939,3551,3945,3645,3955,3646,3955,3661,3956,3692,3964,3720,3972,3727,3972,3734,3972,3764,3971,3792,3971,3799,3977,3811,3988,3811,4012,3810,4044,3811,4046,3825,4114,3828,4123,3835,4149,3857,4189,3887,4239,3910,4239,3923,4239,3960,4194,3996,4147,4009,4147,4033,4147,4046,4160,4069,4184,4091,4197,L,4100,4197,Q,4098,4191,4096,4185,4090,4169,4090,4140,4090,4057,4157,4048,4168,4046,4219,4045,4259,4044,4282,4036,4306,4027,4347,4013,4382,3999,4403,3983,4423,3968,4456,3931,4485,3903,4511,3903,4557,3903,4604,3936,4651,3969,4657,4005,4673,4107,4796,4107,L,4818,4107,Q,4830,4107,4837,4104,4874,4084,4876,4083,4902,4072,4923,4069,4931,4066,4931,4040,4931,4014,4907,3981,4877,3943,4864,3922,4833,3880,4826,3868,4818,3853,4818,3801,4818,3755,4839,3730,4855,3712,4889,3698,4899,3679,4932,3655,4974,3625,4987,3612,5003,3593,5013,3561,5023,3524,5027,3509,5026,3476,5033,3448,5034,3443,5051,3383,5062,3321,5066,3307,5071,3291,5105,3291,5133,3291,5159,3305,5185,3319,5214,3319,5245,3319,5270,3288,5285,3268,5329,3265,5362,3262,5363,3227,5360,3184,5367,3127,5373,3069,5402,3009,5429,2951,5474,2940,5486,2931,5519,2913,5547,2893,5553,2860,5567,2774,5595,2741,5614,2718,5698,2687,5761,2665,5761,2611,L,5758,2507,Q,5757,2472,5748,2449,5740,2428,5740,2406,5740,2373,5775,2354,5796,2342,5832,2312,5863,2281,5884,2256,5904,2231,5912,2210,5929,2205,5934,2188,5936,2182,5936,2154,5936,2125,5928,2100,5919,2075,5919,2059,5919,2031,5938,2008,5957,1986,5957,1949,5957,1905,5934,1906,5884,1908,5858,1896,5849,1892,5824,1861,5798,1827,5791,1820,5773,1801,5721,1801,5660,1801,5614,1822,5592,1831,5572,1853,L,5536,1892,Q,5505,1917,5462,1965,5449,1979,5422,2021,5409,2044,5389,2044,5358,2044,5340,2030,5323,2015,5290,2015,5247,2015,5205,2040,5163,2064,5138,2064,5106,2064,5017,2005,4992,1989,4952,1976,4931,1969,4870,1953,4815,1939,4800,1932,4767,1914,4766,1882,4765,1834,4761,1821,4752,1790,4720,1777,4696,1767,4667,1737,4639,1707,4623,1674,4604,1637,4560,1632,4512,1633,4497,1631,4392,1617,4350,1616,4275,1613,4267,1612,4229,1607,4216,1588,4214,1587,4212,1586,4178,1562,4169,1522,4156,1456,4145,1436,4116,1384,4093,1355,Q,4054,1306,4013,1291,Z]],label:"Gandaki",shortLabel:"GA",labelPosition:[387.7,271.3],labelAlignment:[CEN,MID]},"NP.WE.LU":{outlines:[[M,1490,2794,L,1441,2789,Q,1422,2789,1369,2791,1317,2793,1284,2795,1250,2797,1216,2798,1182,2799,1162,2799,1133,2799,1112,2815,1090,2830,1058,2830,1029,2830,1008,2816,1001,2841,962,2852,918,2861,903,2868,892,2873,843,2873,809,2872,809,2897,809,2915,826,2929,843,2943,843,2965,843,2980,836,3e3,828,3022,828,3045,828,3076,867,3122,905,3167,905,3176,905,3194,871,3194,827,3191,807,3192,772,3194,768,3218,760,3267,755,3276,750,3285,727,3318,705,3351,706,3368,707,3395,702,3431,697,3468,697,3477,697,3504,716,3525,738,3550,748,3571,750,3573,752,3575,778,3596,782,3604,785,3610,785,3636,785,3677,726,3676,652,3676,644,3683,601,3718,556,3728,522,3735,470,3731,419,3726,376,3742,325,3760,305,3799,295,3819,283,3843,272,3860,247,3883,239,3890,203,3910,172,3929,172,3951,172,3997,261,4005,348,4012,348,4044,348,4051,331,4064,322,4072,300,4086,295,4090,274,4111,259,4127,251,4127,230,4127,190,4097,151,4068,94,4068,66,4066,56,4068,39,4072,39,4096,39,4165,58,4270,77,4375,99,4423,100,4425,102,4429,107,4446,126,4488,148,4540,148,4565,148,4576,135,4630,122,4685,122,4717,122,4795,133,4801,L,541,4801,Q,568,4808,582,4837,591,4854,609,4890,624,4913,666,4926,691,4934,742,4944,789,4955,893,4952,1043,4949,1059,4949,1071,4949,1091,4947,1110,4947,1126,4955,1138,4961,1169,5003,1175,5009,1217,5039,1259,5072,1272,5090,1289,5114,1297,5153,1308,5201,1313,5214,1328,5253,1359,5262,1372,5266,1430,5266,1484,5266,1496,5262,1528,5253,1561,5210,1589,5185,1612,5161,1656,5113,1656,5084,1656,5064,1636,5040,1615,5017,1624,4986,1633,4955,1645,4934,1657,4912,1701,4912,1719,4912,1846,4922,1867,4923,1919,4923,1971,4924,1980,4927,2005,4933,2046,4935,2086,4936,2101,4939,2115,4942,2184,4968,2253,4994,2334,5046,2404,5087,2546,5160,2580,5177,2663,5235,2735,5284,2742,5284,2761,5284,2796,5255,2834,5223,2834,5195,2834,5172,2788,5146,2742,5120,2745,5077,2748,5033,2776,5027,L,2827,5031,Q,2892,5035,2911,5021,2926,5010,2933,4963,2938,4920,2960,4887,2988,4844,2993,4832,2944,4833,2919,4831,2876,4827,2876,4799,2876,4757,2912,4746,2931,4740,2993,4742,3155,4742,3171,4739,3231,4727,3323,4729,3393,4725,3430,4671,3481,4594,3513,4560,3571,4500,3639,4485,3663,4479,3697,4465,3719,4456,3772,4433,3810,4417,3849,4383,3877,4357,3902,4357,3927,4357,3951,4370,3974,4383,4010,4383,4052,4383,4064,4375,4083,4361,4095,4310,4102,4252,4102,4222,4102,4208,4100,4197,L,4091,4197,Q,4069,4184,4046,4160,4033,4147,4009,4147,3996,4147,3960,4194,3923,4239,3910,4239,3887,4239,3857,4189,3835,4149,3828,4123,3825,4114,3811,4046,3810,4044,3811,4012,3811,3988,3799,3977,3792,3971,3764,3971,3734,3972,3727,3972,3720,3972,3692,3964,3661,3956,3646,3955,3645,3955,3551,3945,3499,3939,3471,3939,3453,3939,3396,3923,3339,3906,3318,3905,3277,3903,3214,3904,3147,3906,3127,3905,3073,3902,2942,3877,2822,3852,2817,3852,2780,3852,2753,3864,2725,3876,2702,3876,2674,3876,2660,3869,2638,3855,2612,3838,2592,3823,2580,3815,2558,3801,2537,3795,2529,3793,2485,3789,2453,3787,2438,3774,2412,3755,2401,3748,2378,3734,2360,3734,2351,3734,2318,3765,2285,3795,2273,3795,2263,3795,2249,3772,2233,3747,2231,3746,2183,3701,2167,3693,2150,3685,2109,3691,2067,3696,1996,3701,1925,3706,1863,3706,1801,3706,1799,3693,1796,3680,1815,3652,1833,3623,1845,3612,1867,3589,1881,3582,1895,3574,1912,3574,1928,3573,1951,3573,1974,3573,1994,3572,2015,3572,2051,3574,2087,3576,2131,3561,2144,3555,2155,3549,2176,3536,2181,3517,2187,3489,2139,3454,2091,3418,2088,3385,2084,3351,2088,3329,2091,3307,2091,3297,2091,3280,2034,3247,1998,3227,1982,3219,1975,3215,1972,3214,1894,3206,1829,3215,1792,3220,1758,3184,1728,3151,1723,3114,1719,3089,1690,3077,1662,3064,1615,3041,1567,3018,1507,3003,1445,2988,1445,2972,1445,2964,1478,2910,1511,2856,1511,2823,1511,2805,1510,2802,Q,1506,2795,1490,2794,Z]],label:"Lumbini",shortLabel:"LU",labelPosition:[123,415.6],labelAlignment:[CEN,MID]},"NP.WE.DH":{outlines:[[M,2919,53,Q,2902,53,2868,79,2833,104,2791,103,2749,102,2725,124,2701,145,2704,173,2706,200,2689,221,2672,241,2644,247,2631,250,2577,251,2521,251,2494,258,2467,265,2437,304,2406,341,2388,350,2372,379,2371,407,2369,425,2371,433,2372,437,2379,441,2386,445,2411,482,2436,518,2432,540,2428,561,2373,601,2302,630,2296,635,2290,640,2290,682,2291,705,2291,737,2289,751,2281,785,2275,816,2278,838,2284,885,2262,922,2229,962,2210,987,2134,1081,2079,1130,2050,1161,2038,1173,2017,1195,2011,1215,2008,1224,2009,1245,2010,1262,2003,1270,1986,1286,1954,1314,1941,1325,1944,1358,1946,1376,1950,1412,1954,1452,1930,1466,1923,1470,1880,1479,L,1758,1504,Q,1729,1509,1701,1528,1658,1557,1655,1558,1632,1568,1538,1578,1460,1586,1428,1586,1377,1586,1281,1552,1185,1518,1172,1518,1148,1518,1148,1530,1149,1538,1151,1575,1147,1605,1151,1654,1152,1674,1130,1693,1104,1716,1099,1731,1088,1762,1087,1818,1086,1818,984,1817,922,1816,882,1818,823,1813,787,1816,720,1822,712,1868,L,709,1885,Q,709,1924,748,1946,787,1969,787,1993,787,2043,756,2043,737,2043,699,2020,661,1996,635,1996,608,1996,608,2024,608,2071,607,2075,609,2097,577,2107,552,2115,532,2111,L,532,2130,Q,536,2135,576,2166,614,2200,614,2216,614,2219,612,2220,580,2216,561,2216,524,2217,524,2240,524,2249,557,2284,593,2324,602,2341,606,2348,624,2391,637,2422,659,2454,688,2497,694,2504,719,2533,744,2548,753,2553,783,2578,812,2603,819,2607,827,2610,832,2615,837,2620,853,2628,874,2638,903,2636,924,2634,937,2661,944,2677,955,2709,965,2729,982,2784,992,2804,1008,2816,1029,2830,1058,2830,1090,2830,1112,2815,1133,2799,1162,2799,1182,2799,1216,2798,1250,2797,1284,2795,1317,2793,1369,2791,1422,2789,1441,2789,L,1490,2794,Q,1506,2795,1510,2802,1511,2805,1511,2823,1511,2856,1478,2910,1445,2964,1445,2972,1445,2988,1507,3003,1567,3018,1615,3041,1662,3064,1690,3077,1719,3089,1723,3114,1728,3151,1758,3184,1792,3220,1829,3215,1894,3206,1972,3214,1975,3215,1982,3219,1998,3227,2034,3247,2091,3280,2091,3297,2091,3307,2088,3329,2084,3351,2088,3385,2091,3418,2139,3454,2187,3489,2181,3517,2176,3536,2155,3549,2176,3545,2218,3540,2240,3533,2270,3513,2290,3501,2324,3487,2342,3480,2370,3469,2393,3457,2401,3422,2406,3381,2410,3368,2414,3354,2445,3316,2474,3281,2474,3279,2474,3267,2456,3250,2438,3233,2438,3220,2438,3198,2456,3179,2477,3162,2490,3150,2492,3148,2494,3146,2523,3125,2526,3092,2524,3049,2529,3025,2527,2992,2527,2967,2529,2917,2551,2917,2639,2947,2644,2947,2657,2947,2680,2914,2688,2906,2689,2897,L,2689,2876,Q,2689,2854,2673,2847,2645,2840,2621,2827,2599,2813,2591,2806,2567,2786,2567,2766,2567,2758,2577,2746,2587,2734,2587,2722,2587,2712,2568,2686,L,2549,2662,Q,2544,2653,2541,2626,2538,2596,2537,2592,2528,2566,2492,2530,2458,2501,2458,2500,2458,2496,2476,2488,2492,2480,2494,2470,2494,2469,2494,2467,2504,2408,2524,2368,2537,2343,2577,2283,2592,2260,2662,2207,2721,2163,2721,2136,2721,2118,2698,2082,2675,2047,2675,2029,2675,2006,2691,1988,2707,1970,2728,1954,2749,1938,2794,1927,2840,1915,2840,1901,2840,1888,2819,1870,2801,1856,2794,1849,2781,1829,2740,1791,2711,1765,2711,1739,2711,1693,2733,1675,2745,1664,2785,1654,2874,1631,2907,1546,2918,1513,2943,1503,2990,1485,3003,1475,3020,1462,3021,1443,3021,1423,3024,1410,3026,1402,3037,1379,3049,1354,3051,1348,L,3060,1348,Q,3068,1354,3119,1402,3171,1446,3188,1446,3209,1446,3252,1398,3261,1385,3277,1371,3298,1352,3316,1346,L,3337,1338,Q,3350,1331,3354,1319,3354,1284,3356,1271,3363,1223,3412,1223,3422,1223,3455,1227,3488,1230,3512,1229,3535,1227,3538,1227,3542,1227,3586,1216,3630,1204,3675,1187,3664,1175,3664,1152,3664,1110,3687,1071,3709,1030,3713,970,3717,954,3729,912,3734,895,3734,860,3734,807,3728,798,3718,781,3672,786,3660,787,3642,785,3618,781,3613,781,3588,782,3582,781,3575,780,3575,762,3575,742,3600,697,3625,651,3625,638,3625,613,3605,590,3581,568,3570,557,3557,544,3554,514,3554,513,3554,464,3554,424,3555,417,3561,389,3585,384,3612,378,3621,369,3635,353,3629,318,3635,275,3582,274,3513,282,3483,281,3440,279,3444,219,3448,160,3412,158,3396,157,3370,147,3341,136,3327,135,3262,134,3230,132,3197,130,3164,82,3133,35,3102,35,3076,35,3067,43,3055,52,3022,54,Q,2936,52,2919,53,Z]],label:"Dhaulagiri",shortLabel:"DH",labelPosition:[188.9,215.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"westerndevelopmentregion",type:"maps"}}})});