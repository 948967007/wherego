<template>
    <div class='goRecommend'>
        <div class="go">
            <img width="18px" height="18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=" alt="">
            <span>去哪儿推荐</span>
        </div>
        <ul class="goPlace">
            <li v-for="(item,index) in recommendInfo" :key="index">
                <div class="tickets">
                    <div>{{item.title}}</div>
                    <div class="time"><img width="10px" height="10px" src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">{{item.time}}</div>
                </div>
                <div class="reserve">
                    <div class="price">
                        <span class="symbol">￥</span><span>{{item.price}}</span>
                    </div>
                    <div class="predetermine">{{item.type}}</div>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name:'GoRecommend',
    props:["recommendInfo"],
    data() {
        return {

        };
    },
};
</script>
<style lang='less'>
.goRecommend{
    padding:0 15px;
    border-bottom: 15px solid #f5f5f5;
    .go{
        height: 88px;
        line-height: 88px;
        border-bottom:1px solid #f5f5f5;
        span{
            margin-left:20px;
            font-size: 32px;
            vertical-align: 8px;
        }
    }
    .goPlace{
        li{
            display:flex;
            justify-content: space-between;
            align-items: center;
            height: 160px;
            color: #616161;
            .tickets{
                font-size: 28px;

                .time{
                    margin-top: 5px;
                    font-size: 24px;
                }
            }
            .reserve{
                text-align: center;
                .price{
                    color: #ff9800;
                    span{
                        font-size: 40px;
                    }
                    .symbol{
                        font-size: 24px;
                    }

                }
                .predetermine{
                    width: 160px;
                    height: 60px;
                    background: #ff9800;
                    color: #fff;
                    font-size: 30px;
                    border-radius: 10px;
                    text-align: center;
                    line-height: 60px;
                }

            }
        }
    }
}
</style>
