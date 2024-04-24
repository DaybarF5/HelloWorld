(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=642)})({642:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(643);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},643:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Salzburg.20.10-31-2012 09:47:02
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Salzburg",revision:20,standaloneInit:true,baseWidth:300,baseHeight:250,baseScaleFactor:10,entities:{"AT.SZ.SL":{outlines:[[M,1961,167,Q,1956,164,1951,160,1950,159,1949,158,L,1949,158,Q,1947,156,1946,155,1943,153,1939,150,1932,145,1919,141,1918,140,1916,140,1899,139,1883,128,1882,127,1880,126,1880,117,1877,109,1877,109,1877,108,1876,106,1876,106,1859,104,1841,104,1841,111,1846,114,L,1846,114,Q,1848,116,1850,118,1850,119,1851,119,1857,128,1849,134,1848,135,1847,137,1844,145,1834,144,1815,142,1799,146,1796,146,1795,147,1793,149,1791,149,1786,150,1781,153,1772,159,1761,164,1748,170,1743,179,1743,180,1742,181,1742,187,1736,187,1714,186,1691,186,1688,186,1685,188,1684,189,1683,191,1683,194,1680,195,1677,197,1676,201,1674,207,1669,207,1662,208,1658,205,1656,204,1654,201,1645,182,1646,159,1646,157,1646,156,1645,156,1644,156,1638,156,1631,155,1630,155,1629,155,1627,155,1626,155,1623,154,1623,151,1623,150,1622,149,1621,147,1621,146,1621,145,1621,144,L,1614,141,Q,1607,138,1601,137,1598,136,1594,135,1581,131,1568,125,1566,124,1564,123,1561,121,1558,120,L,1558,120,Q,1556,119,1556,118,1545,100,1534,83,1533,81,1531,79,1528,76,1524,73,1523,73,1521,72,1520,71,1520,71,1514,67,1514,56,1514,53,1513,49,1511,44,1508,40,1505,36,1501,35,1493,31,1493,39,1493,40,1492,42,1490,47,1486,45,1486,45,1485,44,1485,44,1484,43,L,1483,41,Q,1477,45,1469,44,1462,44,1461,51,1461,54,1460,55,1458,56,1454,56,1441,56,1429,57,1426,58,1424,58,1418,59,1415,64,1414,66,1413,68,1411,70,1409,72,1408,74,1406,75,1399,77,1395,75,1395,75,1394,74,L,1394,74,Q,1390,70,1384,66,1381,65,1379,63,1374,59,1370,55,L,1367,52,Q,1366,51,1366,51,1365,50,1364,49,1357,41,1349,38,1346,38,1345,38,1343,40,1341,44,1339,50,1337,56,1336,59,1331,60,1324,62,1319,66,1313,70,1309,72,1308,73,1307,74,1306,76,1305,78,1301,83,1301,89,1301,91,1300,93,1298,95,1295,97,1293,99,1291,100,1285,104,1284,111,1283,123,1281,134,1281,136,1280,138,1276,143,1269,140,1256,135,1241,131,1241,134,1241,136,1241,139,1242,141,1244,144,1244,149,1244,160,1243,171,1243,175,1242,179,1240,190,1244,196,1246,198,1248,200,1252,203,1259,203,1264,204,1268,206,1284,213,1304,210,1312,210,1315,213,1315,214,1316,214,1318,217,1319,221,1320,224,1320,226,1317,236,1321,250,1322,251,1323,251,1326,251,1329,252,1337,254,1337,246,1338,245,1337,244,1337,238,1341,240,1345,241,1347,244,1351,249,1349,259,1347,280,1357,296,1361,302,1364,306,1375,323,1389,336,L,1389,336,Q,1390,338,1390,339,1391,345,1392,351,1393,354,1393,356,1394,360,1395,364,1395,365,1395,366,1396,384,1408,395,L,1408,395,Q,1409,395,1409,396,1410,396,1410,396,1410,397,1412,397,L,1412,398,Q,1413,398,1414,399,1414,399,1414,400,1415,404,1417,408,1418,410,1419,411,L,1420,411,Q,1424,412,1426,416,1428,418,1429,421,1430,426,1433,429,1434,430,1435,431,1436,432,1437,432,1441,434,1443,436,L,1443,437,Q,1444,439,1445,440,1446,443,1448,445,1449,446,1450,448,1453,453,1456,459,1458,461,1459,463,1460,464,1461,465,1464,467,1466,469,1467,470,1467,471,L,1469,472,Q,1469,473,1469,473,1471,474,1472,476,1476,480,1479,486,1477,486,1475,486,1473,486,1472,485,1471,485,1469,485,1461,486,1459,481,1458,480,1457,480,1454,479,1454,478,1450,471,1444,472,1442,473,1439,472,1432,472,1433,479,1433,480,1434,482,1434,484,1435,485,1442,490,1444,499,1444,501,1442,503,1441,506,1441,508,1441,510,1441,512,1442,515,1440,516,1439,517,1439,517,L,1439,516,1439,516,Q,1435,516,1431,517,1428,517,1425,516,1422,515,1422,511,1421,505,1427,505,1429,506,1431,506,1430,505,1429,505,1426,504,1424,503,1416,497,1415,506,1415,508,1415,509,1413,518,1411,526,1410,528,1409,528,1406,529,1405,530,1404,531,1403,532,1397,535,1394,539,1393,540,1391,541,1382,548,1379,556,1379,559,1378,559,1374,560,1373,564,1373,565,1372,566,1365,576,1361,586,1360,589,1360,591,1359,598,1357,602,1355,604,1355,606,1355,614,1346,612,1334,609,1337,621,1338,623,1338,624,1341,628,1344,631,1345,632,1346,632,1348,634,1349,634,1354,636,1357,639,1359,642,1359,646,1359,649,1358,650,1347,663,1341,674,1340,676,1339,679,1339,681,1338,683,1332,690,1319,694,1318,695,1316,695,1313,696,1307,699,1305,709,1299,712,1298,713,1297,714,1294,730,1298,744,1299,746,1300,748,1301,750,1303,752,1304,752,1304,752,1306,754,1307,755,1309,756,1310,758,1311,759,1312,759,1321,765,1331,764,1356,764,1381,763,1391,762,1399,767,1400,768,1401,768,1405,769,1407,771,1409,773,1414,772,1426,771,1430,762,1434,753,1437,747,1439,744,1442,743,1445,741,1448,740,1453,739,1457,737,1466,734,1469,739,1470,740,1472,741,1474,741,1475,743,1477,744,1481,746,1491,748,1496,754,1498,755,1499,755,1507,748,1515,740,1516,739,1519,738,1520,738,1521,737,1528,736,1533,734,1535,734,1536,731,1542,722,1551,721,1553,721,1554,719,1557,712,1562,706,1563,705,1563,704,1564,700,1564,696,1567,683,1584,685,1591,686,1599,687,1611,688,1619,682,1621,681,1624,681,1625,680,1626,679,1629,674,1639,673,1641,673,1643,671,1653,663,1662,658,1665,656,1668,657,1677,660,1686,658,1692,657,1693,660,1698,659,1701,659,1705,659,1704,654,1701,638,1719,641,1723,641,1726,642,1730,642,1731,645,1733,648,1732,654,1732,662,1733,669,1734,675,1735,681,1735,684,1737,686,1738,688,1740,690,1745,693,1751,693,1754,693,1756,693,1763,694,1769,694,1776,695,1781,701,1783,703,1784,706,1785,709,1786,711,1790,721,1792,729,1793,731,1793,734,1795,740,1799,743,1806,749,1819,748,1820,748,1821,749,1823,750,1823,751,1825,755,1825,761,1824,774,1824,786,1824,795,1825,804,1825,805,1826,806,1832,814,1840,823,1841,823,1841,823,1842,824,1844,824,1852,825,1858,832,1860,834,1862,836,1864,840,1867,842,L,1867,843,Q,1869,844,1871,845,1876,846,1882,848,1885,849,1889,849,1924,847,1956,853,1964,854,1971,855,1981,856,1989,860,1991,861,1994,862,2008,864,2014,871,2016,873,2019,873,2023,874,2026,874,2034,876,2038,880,2039,881,2041,882,2065,885,2091,885,2093,885,2094,886,2095,888,2097,889,L,2097,889,Q,2104,898,2101,916,2099,927,2105,931,2108,933,2114,933,2122,934,2131,935,2133,935,2134,935,2139,936,2144,937,2146,937,2147,940,2148,941,2148,944,2148,945,2148,946,2149,951,2149,956,2149,961,2152,961,2155,962,2159,961,2163,960,2165,954,L,2165,953,Q,2165,951,2166,950,2162,951,2160,949,2157,948,2156,944,2156,941,2157,939,2159,936,2159,929,2159,926,2160,925,2164,920,2164,914,2164,902,2171,896,2173,895,2173,894,2174,891,2174,889,2176,880,2179,872,2180,870,2181,869,2181,866,2182,864,2189,855,2191,841,2204,845,2221,844,2224,844,2224,843,2226,836,2226,829,2225,817,2231,811,2233,810,2233,809,2234,804,2237,802,2239,800,2241,800,2248,799,2250,794,2250,793,2251,791,2256,778,2256,764,L,2256,761,Q,2231,759,2205,756,2204,754,2203,754,2184,751,2164,752,2157,752,2152,748,2150,746,2148,746,2147,746,2145,745,2144,744,2143,743,2142,741,2141,740,2132,740,2126,734,2125,733,2124,732,2116,731,2112,728,2110,726,2108,724,2108,723,2107,721,2102,714,2086,717,2085,717,2084,717,2081,717,2081,714,2081,710,2081,706,2080,699,2083,693,2085,689,2089,681,2089,669,2089,656,2089,654,2090,653,2101,645,2101,631,2101,629,2102,627,2113,616,2121,608,2124,605,2128,603,2130,603,2131,601,2133,594,2139,591,2152,585,2162,597,2163,598,2164,599,2165,600,2165,600,2166,600,2166,600,2175,600,2179,604,2181,606,2184,608,2206,618,2231,616,2234,616,2235,615,2236,613,2237,609,2239,597,2234,591,2233,591,2233,589,2232,589,2231,588,2230,588,2230,586,2229,584,2228,583,2228,582,2228,582,2226,580,2224,579,2214,573,2201,574,2199,574,2198,575,2196,578,2195,581,2194,586,2186,585,2179,584,2171,583,2164,582,2160,578,2156,576,2155,571,2154,569,2153,568,2136,560,2111,562,2109,563,2106,563,2093,564,2079,565,2078,565,2076,565,2064,566,2051,566,2049,566,2047,565,2040,563,2034,562,2020,560,2016,571,2015,573,2015,574,2014,582,2006,581,1998,580,1994,577,1991,575,1989,571,1989,569,1988,568,1986,566,1986,565,1984,563,1983,560,1982,559,1981,557,1954,556,1926,556,1924,556,1922,555,1916,551,1908,547,1902,544,1898,540,1895,537,1893,534,1889,527,1889,519,1889,515,1888,512,1886,509,1881,509,1871,509,1864,509,1863,509,1861,509,1861,504,1864,501,1865,500,1865,499,1866,461,1866,424,1866,421,1865,419,1863,416,1864,409,1864,406,1863,404,1861,401,1858,398,1857,397,1856,396,1855,395,1854,395,1851,394,1850,393,1848,391,1846,391,1844,390,1842,389,1838,387,1838,381,1838,371,1841,366,1843,365,1843,364,1848,356,1847,344,1846,340,1845,337,1842,329,1843,316,1844,305,1854,302,1856,301,1856,301,1860,281,1856,261,1853,247,1854,231,1854,223,1859,219,1861,216,1862,213,1864,208,1869,205,1878,199,1886,196,1898,192,1906,197,1908,198,1909,198,1915,202,1918,205,1922,208,1926,211,1929,214,1932,217,1937,222,1940,227,1945,234,1953,242,1954,242,1954,242,1956,244,1957,244,1961,245,1961,247,1962,248,1962,249,1962,252,1965,252,1966,252,1969,252,1971,251,1971,251,1974,239,1974,226,1974,224,1975,222,1976,220,1978,218,1982,215,1986,211,1988,209,1989,207,1993,203,1994,199,1994,195,1995,191,1996,185,1994,182,1991,176,1981,178,1979,179,1978,180,1977,183,1972,181,1970,180,1969,180,1968,180,1967,179,1963,178,1964,174,1965,172,1964,170,Q,1963,168,1961,167,Z]],label:"Salzburg-Umgebung(Flachgau)",shortLabel:"SL",labelPosition:[170.5,49.5],labelAlignment:[CEN,MID]},"AT.SZ.JO":{outlines:[[M,1894,1209,Q,1879,1208,1869,1204,1863,1202,1863,1194,1863,1190,1862,1186,1860,1175,1849,1174,1846,1174,1844,1173,1840,1170,1834,1170,1826,1169,1819,1168,1814,1168,1812,1171,1807,1179,1796,1177,1784,1175,1779,1168,1777,1164,1774,1164,1767,1164,1767,1156,1768,1150,1765,1146,1761,1140,1756,1139,1754,1139,1751,1136,1742,1136,1738,1132,1736,1130,1734,1129,1731,1129,1729,1128,1726,1126,1724,1124,1715,1116,1704,1114,1685,1112,1674,1119,1673,1120,1672,1122,1671,1124,1670,1126,1666,1132,1659,1137,1656,1139,1653,1140,1648,1143,1644,1149,1639,1157,1637,1166,1636,1169,1635,1170,1630,1175,1629,1184,1629,1189,1624,1188,1621,1188,1620,1185,1618,1181,1615,1178,1607,1170,1598,1176,1596,1178,1595,1180,1590,1188,1583,1193,1581,1195,1580,1197,1579,1199,1578,1200,1576,1201,1574,1202,1570,1205,1561,1203,1560,1203,1559,1202,1536,1201,1513,1201,1514,1215,1514,1229,1514,1235,1513,1241,1510,1256,1501,1266,1499,1269,1496,1269,1484,1271,1479,1279,1478,1281,1476,1283,1473,1286,1469,1289,1464,1294,1463,1301,1463,1303,1463,1304,1463,1311,1459,1316,1458,1318,1457,1319,1457,1322,1456,1324,1456,1329,1457,1334,1458,1339,1458,1344,1459,1348,1460,1351,1460,1353,1460,1354,1460,1362,1464,1365,1469,1369,1472,1373,1474,1375,1474,1377,1476,1383,1481,1384,1484,1385,1486,1387,1488,1389,1490,1390,1491,1391,1493,1393,1494,1394,1495,1395,1496,1396,1498,1398,1499,1399,1500,1400,1511,1407,1510,1424,1509,1437,1505,1449,1505,1450,1505,1451,1504,1458,1503,1464,1503,1466,1502,1469,1497,1486,1499,1506,1499,1509,1500,1510,1503,1514,1504,1519,1506,1523,1509,1524,1513,1526,1513,1529,1513,1534,1511,1539,1510,1541,1509,1544,1508,1549,1506,1554,1505,1556,1503,1558,1496,1564,1489,1574,1488,1576,1488,1579,1488,1592,1482,1602,1481,1604,1480,1606,1475,1616,1476,1629,1477,1640,1479,1648,1480,1650,1480,1651,1483,1663,1496,1670,1504,1674,1513,1682,1515,1684,1517,1685,1528,1693,1526,1709,1526,1711,1525,1713,1521,1718,1521,1724,1521,1726,1520,1728,1518,1732,1518,1739,1518,1741,1517,1744,1514,1753,1506,1754,1496,1756,1499,1766,1499,1769,1499,1771,1500,1777,1497,1779,1496,1785,1497,1791,1498,1794,1498,1796,1498,1812,1502,1824,1505,1833,1505,1844,1505,1846,1505,1849,1506,1861,1505,1874,1505,1875,1505,1876,1504,1880,1503,1884,1502,1892,1501,1901,1500,1913,1493,1921,1491,1923,1490,1924,1482,1935,1482,1949,1481,1960,1480,1971,1480,1974,1480,1976,1481,1989,1477,1997,1476,1999,1475,2001,1472,2005,1472,2011,1471,2014,1470,2015,1462,2022,1464,2036,1465,2040,1465,2044,1466,2055,1466,2066,1465,2079,1463,2091,1462,2106,1465,2114,1466,2116,1467,2118,1478,2130,1479,2149,1479,2156,1476,2159,1473,2163,1474,2171,1477,2188,1466,2194,1465,2195,1465,2196,1463,2202,1456,2202,1454,2203,1451,2204,1445,2207,1441,2214,1440,2215,1439,2216,1436,2216,1435,2218,1434,2219,1433,2221,1433,2223,1431,2223,1429,2224,1427,2225,1425,2226,1423,2227,1418,2228,1419,2234,1419,2236,1420,2238,1425,2246,1429,2260,L,1430,2260,Q,1431,2259,1434,2258,1445,2256,1452,2263,1455,2265,1459,2265,1466,2266,1467,2274,1468,2275,1469,2276,1472,2280,1472,2286,1473,2288,1474,2288,1493,2301,1519,2308,1533,2312,1537,2302,1539,2299,1541,2297,1545,2294,1546,2289,1557,2296,1571,2295,1575,2295,1579,2296,1581,2298,1584,2298,1585,2298,1587,2297,1591,2295,1596,2294,1609,2291,1617,2285,1619,2284,1621,2283,1626,2283,1631,2282,1655,2281,1679,2282,1692,2282,1690,2266,1690,2264,1690,2261,1692,2248,1704,2247,1731,2246,1759,2247,1773,2247,1782,2242,1784,2241,1785,2240,1786,2239,1786,2236,1786,2227,1785,2219,1782,2205,1788,2193,1789,2191,1789,2189,1789,2182,1796,2176,1799,2173,1802,2170,1804,2169,1806,2168,1809,2168,1810,2166,1813,2162,1816,2156,1820,2148,1830,2143,1833,2141,1836,2140,1838,2140,1839,2140,1846,2139,1854,2138,1856,2138,1859,2137,1865,2136,1871,2139,1876,2141,1878,2143,1879,2144,1880,2145,1881,2146,1881,2149,1882,2156,1889,2157,1890,2158,1892,2158,1894,2159,1896,2159,1914,2161,1927,2150,1930,2148,1934,2146,1947,2142,1956,2138,1960,2135,1965,2136,1960,2121,1959,2104,1959,2103,1956,2101,1947,2096,1944,2086,1943,2084,1941,2082,1933,2073,1935,2056,1937,2046,1934,2036,1934,2034,1933,2033,1931,2031,1930,2030,1928,2029,1926,2026,1924,2021,1920,2018,1919,2016,1919,2014,1919,2005,1920,1996,1920,1991,1923,1988,1927,1984,1927,1974,1926,1963,1927,1951,1928,1948,1930,1944,1933,1939,1937,1935,1939,1934,1941,1933,1949,1932,1953,1925,1954,1924,1955,1923,1959,1920,1962,1917,1977,1898,1987,1882,1990,1878,1996,1878,2009,1878,2014,1884,2018,1890,2031,1889,2040,1889,2049,1888,2054,1887,2059,1884,2070,1876,2082,1872,2085,1871,2089,1871,2103,1871,2116,1870,2118,1870,2119,1870,2128,1868,2134,1859,2137,1856,2143,1855,2148,1854,2152,1852,2154,1851,2156,1850,2161,1847,2167,1844,2181,1837,2199,1838,2223,1840,2246,1834,2246,1834,2247,1831,2248,1829,2249,1827,2256,1820,2266,1813,2270,1810,2274,1806,2278,1802,2284,1802,2285,1803,2286,1802,2295,1801,2297,1791,2298,1787,2300,1781,2305,1769,2317,1759,2318,1759,2318,1758,2317,1750,2323,1745,2325,1744,2326,1741,2329,1738,2334,1737,2336,1736,2339,1736,2340,1735,2341,1735,2348,1734,2350,1728,L,2349,1726,2348,1726,Q,2341,1716,2332,1708,2330,1706,2328,1704,2323,1697,2319,1689,2321,1684,2329,1685,2331,1685,2334,1685,2340,1684,2346,1684,2334,1681,2335,1664,2335,1661,2335,1659,2334,1648,2335,1636,2335,1635,2336,1633,2343,1618,2334,1606,2330,1602,2330,1596,2330,1594,2328,1592,2320,1582,2316,1569,2315,1566,2314,1564,2305,1540,2300,1516,2300,1515,2300,1514,2299,1503,2299,1491,2298,1477,2296,1464,2301,1459,2297,1452,2296,1450,2294,1448,2287,1441,2279,1435,2273,1431,2267,1425,2266,1424,2267,1421,2268,1419,2269,1416,2270,1415,2271,1414,2279,1404,2284,1394,2286,1391,2289,1390,2294,1387,2295,1379,2295,1378,2295,1376,2296,1371,2297,1366,2298,1365,2298,1363,2301,1358,2301,1351,2302,1339,2309,1334,2312,1331,2311,1323,2311,1322,2310,1320,2315,1315,2314,1304,2313,1294,2299,1293,2292,1293,2291,1289,2290,1288,2289,1287,2277,1285,2271,1279,2270,1278,2269,1276,2263,1265,2251,1262,2246,1260,2241,1259,2239,1259,2237,1258,2232,1255,2224,1255,2216,1255,2211,1251,2204,1264,2189,1268,2186,1269,2184,1270,2179,1273,2179,1274,2176,1275,2176,1277,2174,1280,2169,1280,2162,1279,2160,1283,2158,1287,2154,1294,2148,1302,2142,1307,2140,1309,2138,1309,2129,1311,2119,1311,2115,1311,2113,1313,2111,1316,2104,1314,2101,1314,2100,1315,2097,1318,2089,1317,2076,1316,2064,1317,2059,1318,2057,1313,2056,1311,2055,1309,2052,1303,2048,1299,2039,1291,2034,1279,2033,1276,2032,1274,2031,1257,2030,1241,2030,1227,2021,1221,2010,1213,1999,1206,1991,1200,1979,1200,1966,1200,1961,1206,1958,1211,1951,1211,1933,1211,1914,1210,Q,1904,1210,1894,1209,Z]],label:"Sankt Johann im Pongau(Pongau)",shortLabel:"JO",labelPosition:[188.3,171.1],labelAlignment:[CEN,MID]},"AT.SZ.HA":{outlines:[[M,1957,853,Q,1924,847,1889,849,1886,849,1882,848,1877,846,1872,845,1869,844,1868,843,1864,840,1862,836,1855,825,1844,824,1842,824,1841,823,1832,814,1827,806,1826,805,1825,804,1824,795,1824,786,1824,774,1825,761,1826,752,1822,749,1821,748,1819,748,1798,749,1794,734,1793,731,1792,729,1790,721,1787,711,1786,709,1784,706,1780,696,1769,694,1763,694,1757,693,1754,693,1752,693,1742,693,1737,686,1736,684,1735,681,1734,675,1733,669,1732,662,1733,654,1734,643,1727,642,1723,641,1719,641,1702,638,1705,654,1706,659,1702,659,1698,659,1693,660,1692,657,1687,658,1677,660,1669,657,1666,656,1663,658,1653,663,1644,671,1642,673,1639,673,1630,674,1627,679,1626,680,1624,681,1622,681,1620,682,1611,688,1599,687,1592,686,1584,685,1567,683,1565,696,1564,700,1563,704,1563,705,1562,706,1558,712,1554,719,1553,721,1551,721,1542,722,1537,731,1536,734,1534,734,1528,736,1522,737,1521,738,1519,738,1517,739,1515,740,1507,748,1499,755,1509,754,1509,761,1509,764,1510,766,1512,770,1517,774,1518,775,1519,776,1523,784,1529,787,1531,788,1531,789,1531,794,1534,796,1549,805,1554,819,1556,821,1556,824,1557,831,1558,839,1559,854,1554,864,1563,874,1570,888,1571,890,1571,891,1571,898,1574,901,1582,908,1580,921,1579,928,1580,934,1582,945,1574,948,1570,950,1568,957,1567,959,1566,961,1556,977,1545,992,1543,994,1541,995,1539,996,1537,997,1529,999,1528,1006,1528,1009,1529,1010,1531,1013,1532,1016,1533,1018,1534,1019,1550,1030,1542,1049,1541,1051,1539,1052,1527,1054,1514,1053,1505,1052,1502,1056,1501,1058,1500,1059,1499,1067,1499,1076,1499,1083,1503,1088,1508,1095,1515,1106,1512,1117,1507,1124,1506,1126,1504,1127,1497,1128,1496,1136,1496,1139,1495,1141,1495,1148,1492,1151,1489,1154,1488,1161,1487,1172,1494,1173,1497,1174,1499,1175,1504,1177,1503,1184,1503,1194,1509,1198,1510,1199,1511,1199,1513,1200,1513,1201,1536,1201,1559,1202,1561,1203,1562,1203,1570,1205,1575,1202,1577,1201,1578,1200,1579,1199,1580,1197,1582,1195,1584,1193,1591,1188,1596,1180,1597,1178,1599,1176,1607,1170,1615,1178,1618,1181,1621,1185,1622,1188,1624,1188,1630,1189,1630,1184,1630,1175,1636,1170,1637,1169,1637,1166,1640,1157,1645,1149,1648,1143,1654,1140,1657,1139,1660,1137,1667,1132,1671,1126,1672,1124,1673,1122,1673,1120,1674,1119,1686,1112,1704,1114,1715,1116,1724,1124,1727,1126,1730,1128,1732,1129,1734,1129,1737,1130,1738,1132,1742,1136,1752,1136,1754,1139,1757,1139,1761,1140,1765,1146,1769,1150,1768,1156,1767,1164,1774,1164,1777,1164,1780,1168,1785,1175,1797,1177,1808,1179,1812,1171,1815,1168,1819,1168,1827,1169,1834,1170,1840,1170,1845,1173,1847,1174,1849,1174,1861,1175,1862,1186,1863,1190,1863,1194,1864,1202,1869,1204,1879,1208,1894,1209,1904,1210,1914,1210,1933,1211,1952,1211,1959,1211,1962,1206,1967,1200,1979,1200,1991,1200,1999,1206,2010,1213,2022,1221,2030,1227,2031,1241,2032,1257,2033,1274,2033,1276,2034,1279,2040,1291,2049,1299,2052,1303,2056,1309,2057,1311,2058,1313,2060,1318,2064,1317,2077,1316,2089,1317,2097,1318,2100,1315,2102,1314,2104,1314,2111,1316,2114,1313,2116,1311,2119,1311,2129,1311,2139,1309,2141,1309,2142,1307,2149,1302,2154,1294,2159,1287,2161,1283,2163,1279,2169,1280,2175,1280,2176,1277,2177,1275,2179,1274,2180,1273,2185,1270,2187,1269,2189,1268,2205,1264,2211,1251,2208,1250,2206,1247,2203,1242,2203,1234,2203,1229,2199,1226,2198,1225,2197,1224,2180,1214,2154,1208,2149,1207,2145,1203,2144,1204,2145,1194,2146,1186,2143,1181,2141,1178,2140,1174,2136,1156,2144,1146,2146,1144,2147,1143,2159,1141,2157,1126,2157,1124,2156,1123,2154,1121,2154,1120,2150,1110,2149,1099,2149,1096,2150,1095,2158,1085,2158,1071,2157,1060,2167,1059,2174,1058,2179,1054,2184,1051,2184,1046,2184,1031,2184,1016,2184,1002,2192,996,2193,995,2194,995,2202,994,2206,988,2211,983,2215,976,2216,975,2216,974,2219,961,2212,959,2209,959,2207,958,2204,956,2197,955,2196,955,2194,955,2183,955,2174,951,2172,950,2169,950,2168,950,2166,950,2166,951,2165,954,2164,960,2159,961,2149,964,2149,956,2149,951,2148,946,2148,945,2148,944,2148,937,2144,937,2139,936,2134,935,2133,935,2132,935,2123,934,2114,933,2098,933,2101,916,2105,895,2094,886,2093,885,2092,885,2066,885,2042,882,2039,881,2038,880,2035,876,2027,874,2023,874,2019,873,2017,873,2015,871,2008,864,1994,862,1992,861,1990,860,1981,856,1972,855,Q,1964,854,1957,853,Z]],label:"Hallein(Tenneegau)",shortLabel:"HA",labelPosition:[185.1,97.9],labelAlignment:[CEN,MID]},"AT.SZ.TA":{outlines:[[M,2684,1710,Q,2686,1709,2686,1708,2692,1691,2676,1691,2668,1692,2662,1697,2655,1702,2649,1709,2648,1711,2645,1712,2638,1716,2629,1722,2625,1724,2622,1727,2620,1729,2618,1731,2610,1740,2608,1751,2606,1763,2589,1763,2583,1763,2582,1759,2581,1756,2580,1755,2579,1753,2577,1750,2576,1749,2575,1747,2574,1744,2571,1744,2545,1741,2519,1741,2515,1741,2514,1743,2511,1748,2511,1754,2510,1760,2509,1766,2509,1769,2508,1769,2500,1771,2491,1772,2476,1774,2474,1757,2471,1756,2469,1755,2466,1754,2464,1754,2450,1753,2439,1748,2436,1748,2434,1747,2421,1745,2409,1744,2406,1744,2405,1745,2398,1750,2386,1751,2384,1751,2383,1750,2381,1749,2381,1746,2380,1738,2372,1735,2371,1737,2368,1736,2365,1736,2361,1731,2358,1728,2351,1728,2351,1728,2350,1727,2350,1728,2350,1728,L,2350,1728,Q,2348,1734,2341,1735,2340,1735,2339,1736,2336,1736,2334,1737,2329,1738,2326,1741,2325,1744,2323,1745,2317,1750,2318,1758,2318,1759,2317,1759,2305,1769,2300,1781,2298,1787,2297,1791,2295,1801,2286,1802,2285,1803,2284,1802,2278,1802,2274,1806,2270,1810,2266,1813,2256,1820,2249,1827,2248,1829,2247,1831,2246,1834,2246,1834,2223,1840,2199,1838,2181,1837,2167,1844,2161,1847,2156,1850,2154,1851,2152,1852,2148,1854,2143,1855,2137,1856,2134,1859,2128,1868,2119,1870,2118,1870,2116,1870,2103,1871,2089,1871,2085,1871,2082,1872,2070,1876,2059,1884,2054,1887,2049,1888,2040,1889,2031,1889,2018,1890,2014,1884,2009,1878,1996,1878,1990,1878,1987,1882,1977,1898,1962,1917,1959,1920,1955,1923,1954,1924,1953,1925,1949,1932,1941,1933,1939,1934,1937,1935,1933,1939,1930,1944,1928,1948,1927,1951,1926,1963,1927,1974,1927,1984,1923,1988,1920,1991,1920,1996,1919,2005,1919,2014,1919,2016,1920,2018,1924,2021,1926,2026,1928,2029,1930,2030,1931,2031,1933,2033,1934,2034,1934,2036,1937,2046,1935,2056,1933,2073,1941,2082,1943,2084,1944,2086,1947,2096,1956,2101,1959,2103,1959,2104,1960,2121,1965,2136,1966,2136,1967,2136,1968,2136,1969,2136,1974,2138,1977,2135,1979,2134,1981,2134,1988,2133,1992,2135,1994,2136,1996,2137,1998,2138,1998,2139,2002,2147,2008,2157,2014,2167,2019,2178,2020,2180,2021,2181,2025,2187,2027,2190,2029,2191,2031,2192,2045,2194,2054,2187,2059,2183,2066,2183,2068,2183,2069,2182,2092,2181,2116,2181,2142,2180,2164,2189,2175,2194,2184,2199,2185,2200,2186,2201,2207,2217,2236,2214,2250,2212,2259,2215,2263,2216,2266,2217,2273,2218,2277,2223,2279,2224,2281,2224,2295,2225,2304,2229,2308,2231,2311,2234,2315,2237,2321,2237,2347,2238,2369,2230,2371,2229,2374,2229,2386,2231,2392,2227,2394,2226,2396,2226,2397,2226,2397,2226,2398,2226,2399,2224,2403,2225,2406,2225,2414,2225,2412,2234,2411,2240,2411,2246,2410,2255,2415,2260,2416,2261,2419,2261,2453,2261,2486,2264,L,2486,2266,Q,2486,2280,2485,2294,2485,2295,2485,2296,2482,2310,2489,2321,2495,2331,2497,2341,2498,2345,2498,2349,2498,2358,2503,2365,2504,2366,2506,2367,2508,2368,2509,2368,2536,2369,2564,2370,2566,2370,2569,2371,2583,2379,2594,2396,2596,2400,2598,2404,2602,2413,2606,2416,2610,2420,2615,2428,2618,2435,2620,2442,2621,2444,2621,2446,2621,2456,2620,2466,2620,2469,2619,2471,2619,2474,2619,2476,2633,2474,2646,2468,2649,2466,2652,2464,2660,2458,2663,2450,2664,2449,2666,2449,2669,2448,2672,2444,2674,2440,2680,2435,2681,2433,2683,2431,2687,2426,2688,2419,2689,2418,2690,2416,2693,2413,2695,2410,2696,2408,2698,2405,2699,2404,2700,2402,2701,2400,2703,2398,2704,2396,2705,2395,2706,2394,2709,2393,2710,2393,2711,2392,2720,2386,2723,2379,2724,2378,2726,2377,2733,2375,2734,2366,2736,2364,2736,2361,2736,2340,2737,2319,2738,2316,2738,2314,2739,2301,2739,2289,2739,2282,2743,2278,2748,2274,2748,2266,2748,2265,2749,2264,2754,2259,2761,2253,2763,2251,2763,2249,2764,2246,2765,2245,2766,2244,2768,2243,2770,2241,2771,2239,2776,2231,2785,2227,2786,2226,2787,2224,2790,2218,2790,2214,2791,2207,2793,2203,2794,2201,2794,2199,2795,2196,2796,2194,2798,2189,2794,2186,2785,2176,2776,2169,2772,2164,2769,2159,2766,2155,2764,2151,2761,2145,2758,2139,2758,2138,2756,2137,2752,2134,2753,2131,2753,2129,2755,2127,2756,2127,2757,2126,2758,2125,2759,2125,2760,2124,2760,2124,2760,2123,2759,2123,2756,2119,2757,2114,2758,2113,2758,2111,2759,2095,2774,2091,2776,2090,2778,2088,2785,2080,2794,2080,2796,2080,2798,2078,2799,2076,2799,2074,2800,2068,2809,2068,2810,2068,2812,2067,2814,2066,2815,2065,2816,2064,2817,2063,2830,2052,2849,2039,2851,2038,2853,2038,2859,2040,2864,2049,2865,2051,2867,2053,2869,2054,2870,2055,2874,2058,2879,2058,2894,2059,2909,2059,2919,2059,2924,2054,2928,2048,2939,2049,2939,2046,2938,2044,2938,2041,2937,2039,2936,2036,2935,2035,2934,2034,2932,2033,2924,2027,2914,2024,2906,2022,2901,2019,2899,2018,2897,2016,2895,2013,2893,2010,2890,2006,2888,2002,2888,2e3,2887,1999,2883,1980,2861,1984,2843,1988,2834,1973,2832,1970,2824,1971,2818,1971,2811,1970,2799,1968,2789,1962,2785,1959,2787,1952,2789,1946,2794,1943,2795,1943,2795,1941,2796,1935,2797,1929,2798,1924,2794,1924,2786,1926,2784,1921,2784,1919,2783,1918,2773,1912,2770,1899,2770,1896,2770,1894,2770,1885,2766,1882,2764,1880,2762,1878,2759,1875,2754,1873,2743,1869,2732,1863,2730,1863,2729,1862,2726,1861,2724,1860,2720,1859,2716,1856,2700,1846,2709,1829,2710,1828,2712,1827,2714,1826,2715,1825,2716,1824,2717,1822,2720,1819,2724,1817,2730,1813,2736,1810,2743,1806,2744,1796,2744,1794,2743,1793,2739,1789,2732,1783,2726,1778,2714,1779,2711,1779,2709,1778,2703,1775,2696,1772,2690,1770,2684,1766,2681,1764,2678,1762,2673,1759,2669,1751,2667,1744,2664,1741,2663,1739,2662,1736,2660,1728,2663,1725,2665,1724,2667,1722,2669,1721,2670,1720,2673,1719,2674,1718,2681,1717,2682,1711,Q,2683,1710,2684,1710,Z]],label:"Tamsweg(Lungau)",shortLabel:"TA",labelPosition:[242.8,205.4],labelAlignment:[CEN,MID]},"AT.SZ.ZE":{outlines:[[M,1112,943,Q,1110,943,1108,942,1102,939,1099,937,1096,935,1094,933,1093,931,1091,930,1085,926,1084,919,1083,913,1079,912,1076,911,1075,910,1067,902,1070,889,1070,888,1070,886,1071,880,1076,879,1080,879,1084,878,1085,878,1086,877,1100,876,1099,861,1080,861,1061,861,1058,861,1057,860,1055,853,1051,849,1050,848,1049,848,1042,848,1041,844,1040,843,1039,842,1030,837,1019,838,1006,839,994,838,993,838,991,837,980,836,969,836,943,835,919,838,916,839,916,840,914,845,913,851,911,858,904,857,898,856,891,855,889,855,886,854,875,850,861,850,860,850,859,850,846,849,834,848,829,848,827,852,825,855,823,858,818,865,809,868,806,869,806,870,802,877,802,886,801,893,800,899,800,900,800,901,797,914,796,926,796,930,795,933,794,939,792,946,791,949,790,950,782,960,784,974,784,976,783,978,780,983,781,991,781,994,782,996,784,1001,794,1e3,800,999,806,1e3,826,1003,846,1002,857,1002,866,1011,868,1013,869,1013,871,1014,872,1015,876,1019,884,1020,890,1021,896,1022,907,1023,913,1029,918,1034,922,1035,927,1037,927,1044,928,1046,929,1049,932,1054,933,1061,937,1076,924,1078,921,1079,920,1080,918,1081,916,1083,914,1085,911,1086,909,1086,908,1087,901,1097,891,1104,886,1108,886,1119,886,1121,887,1123,890,1131,894,1136,895,1139,897,1140,902,1145,906,1147,909,1149,912,1150,914,1151,914,1152,916,1159,916,1166,916,1179,915,1191,914,1206,924,1216,928,1219,931,1222,933,1224,934,1224,938,1225,939,1229,939,1230,939,1231,941,1231,944,1232,946,1233,949,1233,951,1234,953,1235,959,1239,966,1246,968,1248,969,1248,976,1252,981,1259,983,1260,983,1261,984,1266,983,1271,981,1278,977,1284,975,1286,975,1289,976,1297,971,1299,969,1300,968,1302,967,1307,961,1307,952,1306,944,1305,934,1304,932,1309,909,1309,886,1308,877,1308,878,1319,879,1327,884,1331,885,1333,886,1334,889,1337,890,1344,890,1346,891,1349,893,1362,890,1369,889,1371,888,1373,884,1376,884,1379,884,1381,883,1383,881,1384,879,1389,877,1395,877,1401,876,1404,875,1404,870,1406,866,1411,864,1413,861,1413,859,1414,859,1414,858,1419,854,1420,853,1420,852,1421,848,1427,848,1434,848,1436,846,1437,835,1442,820,1444,819,1446,820,1447,825,1452,818,1458,816,1460,814,1461,804,1468,791,1467,778,1467,769,1463,754,1456,751,1469,749,1475,741,1475,729,1474,716,1473,715,1473,714,1472,705,1471,696,1471,679,1470,682,1486,683,1493,679,1494,676,1494,674,1495,668,1497,664,1499,663,1500,662,1502,661,1504,660,1506,659,1511,654,1517,653,1519,652,1521,651,1524,650,1525,646,1529,646,1539,646,1543,647,1546,650,1555,659,1560,665,1563,665,1569,666,1582,663,1594,663,1596,662,1599,660,1608,654,1614,645,1622,629,1621,625,1621,622,1622,612,1625,596,1625,584,1624,571,1625,569,1625,566,1625,558,1626,558,1634,558,1647,544,1646,540,1646,537,1648,530,1651,524,1646,521,1643,517,1644,515,1645,514,1645,506,1646,499,1647,479,1649,464,1641,461,1640,459,1640,439,1639,419,1639,416,1639,414,1638,406,1633,396,1624,393,1620,388,1617,382,1612,374,1614,368,1615,361,1618,358,1620,354,1622,346,1627,339,1634,338,1636,338,1639,339,1655,331,1666,330,1669,328,1669,316,1673,308,1670,306,1669,305,1668,296,1659,289,1669,288,1671,286,1672,277,1674,269,1674,266,1674,266,1673,264,1666,265,1659,265,1654,261,1654,252,1654,244,1654,241,1654,240,1655,239,1656,238,1658,236,1660,236,1662,234,1668,232,1672,230,1674,228,1674,208,1676,186,1676,184,1676,182,1677,176,1680,166,1678,162,1678,160,1682,158,1687,152,1690,149,1691,147,1694,140,1709,124,1706,L,118,1704,Q,116,1698,115,1691,115,1690,115,1689,115,1681,109,1678,108,1678,107,1676,100,1664,89,1664,86,1664,85,1665,84,1666,83,1668,81,1670,80,1672,79,1674,78,1676,77,1683,74,1686,71,1692,66,1693,64,1694,62,1695,60,1696,58,1698,44,1707,37,1719,35,1721,34,1724,32,1732,35,1735,39,1737,43,1739,45,1740,46,1742,46,1744,47,1746,52,1753,59,1758,61,1760,64,1761,77,1766,80,1776,80,1778,80,1779,81,1794,81,1809,81,1811,80,1813,78,1817,76,1824,75,1826,74,1829,74,1831,73,1831,68,1832,66,1838,52,1840,52,1856,51,1870,50,1884,50,1886,48,1888,43,1891,40,1898,36,1910,44,1916,45,1918,46,1919,51,1926,51,1936,50,1967,53,1996,54,2001,58,2005,61,2008,63,2011,66,2017,74,2022,78,2024,80,2027,81,2029,82,2031,83,2038,86,2042,88,2047,90,2054,90,2056,91,2059,93,2071,97,2084,99,2090,102,2096,103,2098,104,2099,110,2107,110,2121,111,2137,110,2154,110,2160,116,2160,119,2160,121,2162,123,2163,129,2162,134,2161,138,2160,140,2159,142,2157,154,2143,176,2140,180,2140,184,2140,195,2139,206,2138,216,2137,221,2145,223,2148,226,2150,228,2151,230,2153,231,2154,233,2155,238,2158,242,2160,244,2161,246,2161,252,2161,257,2165,259,2166,261,2167,263,2168,264,2169,273,2178,289,2180,291,2180,294,2178,295,2178,296,2176,300,2172,306,2172,311,2171,316,2169,321,2168,323,2163,325,2159,325,2154,327,2137,341,2133,344,2133,346,2132,353,2131,359,2132,372,2133,375,2121,375,2120,376,2119,381,2110,388,2103,390,2101,392,2100,394,2099,396,2098,401,2098,406,2097,420,2096,434,2095,435,2095,436,2094,446,2089,454,2082,456,2080,458,2078,462,2076,462,2069,463,2066,463,2064,463,2057,465,2053,466,2051,466,2049,464,2035,469,2024,470,2023,471,2022,477,2021,477,2014,490,2011,501,2010,514,2010,523,2015,530,2019,537,2023,539,2024,541,2024,544,2025,546,2025,551,2026,554,2021,558,2015,561,2011,563,2009,565,2007,566,2006,569,2006,570,2005,571,2005,573,2005,574,2006,583,2009,588,2015,589,2016,591,2017,605,2023,613,2013,614,2011,615,2009,615,2008,617,2007,619,2006,620,2005,621,2004,622,2002,623,2e3,624,2e3,628,1999,628,1994,628,1991,629,1989,633,1981,646,1984,649,1985,651,1985,652,1985,652,1985,656,1986,659,1986,661,1988,663,1989,665,1991,666,1994,670,2003,681,2002,687,2001,688,2006,689,2008,691,2008,697,2009,698,2016,698,2030,706,2034,708,2035,708,2037,711,2041,714,2049,715,2050,716,2050,722,2052,724,2058,724,2059,726,2058,733,2057,741,2056,746,2056,751,2055,753,2054,755,2052,756,2051,758,2050,766,2047,779,2048,789,2049,799,2050,801,2050,804,2050,811,2051,814,2053,816,2054,818,2055,829,2059,839,2069,843,2072,845,2079,845,2080,846,2081,850,2083,857,2085,859,2086,860,2087,863,2089,864,2090,868,2093,874,2096,879,2100,884,2103,890,2106,891,2111,893,2122,906,2120,913,2119,919,2118,926,2117,922,2108,921,2106,921,2104,921,2089,924,2074,924,2074,926,2073,929,2073,931,2072,936,2072,941,2072,944,2073,946,2074,958,2073,968,2072,971,2071,974,2069,980,2063,989,2057,991,2056,993,2055,994,2054,995,2053,996,2051,998,2050,1006,2047,1019,2048,1023,2049,1023,2054,1023,2055,1023,2056,1027,2082,1026,2109,1026,2119,1029,2128,1029,2129,1031,2129,1047,2129,1064,2128,1065,2128,1066,2127,1081,2124,1091,2132,1100,2138,1103,2148,1104,2149,1106,2149,1114,2151,1117,2148,1119,2146,1121,2146,1125,2147,1126,2142,1126,2140,1128,2138,1130,2136,1132,2134,1134,2129,1144,2132,1148,2133,1150,2135,1151,2138,1154,2138,1162,2139,1162,2146,1163,2148,1163,2149,1165,2155,1174,2155,1175,2155,1176,2155,1198,2159,1221,2158,1224,2158,1226,2157,1239,2156,1251,2157,1259,2157,1267,2160,1269,2161,1271,2161,1284,2161,1296,2162,1298,2163,1299,2163,1305,2164,1311,2164,1320,2164,1323,2169,1328,2177,1333,2184,1334,2186,1334,2189,1338,2199,1343,2207,1344,2209,1344,2211,1345,2214,1345,2216,1346,2223,1348,2227,1354,2235,1357,2241,1359,2245,1361,2249,1363,2250,1364,2251,1371,2255,1377,2261,1381,2265,1389,2265,1400,2264,1411,2264,1424,2265,1429,2260,L,1429,2260,Q,1425,2246,1420,2238,1419,2236,1419,2234,1418,2228,1423,2227,1425,2226,1427,2225,1429,2224,1431,2223,1433,2223,1433,2221,1434,2219,1435,2218,1436,2216,1439,2216,1440,2215,1441,2214,1445,2207,1451,2204,1454,2203,1456,2202,1463,2202,1465,2196,1465,2195,1466,2194,1477,2188,1474,2171,1473,2163,1476,2159,1479,2156,1479,2149,1478,2130,1467,2118,1466,2116,1465,2114,1462,2106,1463,2091,1465,2079,1466,2066,1466,2055,1465,2044,1465,2040,1464,2036,1462,2022,1470,2015,1471,2014,1472,2011,1472,2005,1475,2001,1476,1999,1477,1997,1481,1989,1480,1976,1480,1974,1480,1971,1481,1960,1482,1949,1482,1935,1490,1924,1491,1923,1493,1921,1500,1913,1501,1901,1502,1892,1503,1884,1504,1880,1505,1876,1505,1875,1505,1874,1506,1861,1505,1849,1505,1846,1505,1844,1505,1833,1502,1824,1498,1812,1498,1796,1498,1794,1497,1791,1496,1785,1497,1779,1500,1777,1499,1771,1499,1769,1499,1766,1496,1756,1506,1754,1514,1753,1517,1744,1518,1741,1518,1739,1518,1732,1520,1728,1521,1726,1521,1724,1521,1718,1525,1713,1526,1711,1526,1709,1528,1693,1517,1685,1515,1684,1513,1682,1504,1674,1496,1670,1483,1663,1480,1651,1480,1650,1479,1648,1477,1640,1476,1629,1475,1616,1480,1606,1481,1604,1482,1602,1488,1592,1488,1579,1488,1576,1489,1574,1496,1564,1503,1558,1505,1556,1506,1554,1508,1549,1509,1544,1510,1541,1511,1539,1513,1534,1513,1529,1513,1526,1509,1524,1506,1523,1504,1519,1503,1514,1500,1510,1499,1509,1499,1506,1497,1486,1502,1469,1503,1466,1503,1464,1504,1458,1505,1451,1505,1450,1505,1449,1509,1437,1510,1424,1511,1407,1500,1400,1499,1399,1498,1398,1496,1396,1495,1395,1494,1394,1493,1393,1491,1391,1490,1390,1488,1389,1486,1387,1484,1385,1481,1384,1476,1383,1474,1377,1474,1375,1472,1373,1469,1369,1464,1365,1460,1362,1460,1354,1460,1353,1460,1351,1459,1348,1458,1344,1458,1339,1457,1334,1456,1329,1456,1324,1456,1325,1455,1326,1454,1331,1451,1331,1448,1331,1444,1332,1436,1333,1433,1330,1430,1326,1427,1323,1425,1321,1425,1319,1424,1315,1423,1312,1420,1305,1417,1296,1416,1294,1415,1292,1414,1290,1412,1288,1408,1282,1399,1284,1398,1285,1398,1288,1391,1288,1393,1296,1394,1299,1393,1299,1383,1301,1374,1296,1371,1295,1369,1295,1362,1294,1359,1291,1356,1289,1353,1287,1351,1286,1350,1285,1344,1281,1338,1277,1330,1270,1319,1263,1318,1263,1316,1262,1305,1259,1296,1252,1295,1252,1294,1251,L,1294,1251,Q,1291,1249,1288,1248,1281,1247,1279,1237,1271,1236,1268,1229,1268,1226,1266,1224,1258,1216,1254,1204,1253,1201,1252,1199,1252,1190,1249,1186,1248,1185,1246,1185,1237,1185,1229,1181,1228,1180,1226,1180,1214,1181,1209,1174,1208,1171,1207,1169,1206,1156,1205,1144,1205,1143,1205,1141,1204,1139,1203,1139,1189,1136,1174,1136,1171,1136,1169,1135,1166,1133,1159,1134,1143,1137,1141,1126,1140,1124,1138,1122,1132,1116,1128,1109,1128,1108,1128,1106,1128,1099,1125,1093,1123,1090,1122,1086,1121,1083,1120,1079,1120,1078,1119,1076,1116,1069,1111,1066,1109,1065,1106,1065,1094,1065,1096,1051,1096,1049,1097,1047,1099,1043,1101,1039,1103,1034,1109,1032,1123,1028,1118,1011,1118,1009,1117,1006,1116,1004,1117,1003,1125,996,1139,991,1141,990,1143,988,1148,984,1151,982,1154,980,1155,978,1156,976,1157,974,1158,966,1154,964,1148,961,1143,957,1134,951,1121,947,Q,1116,945,1112,943,Z]],label:"Zell am See(Pinzgau)",shortLabel:"ZE",labelPosition:[88.9,174],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"salzburg",type:"maps"}}})});