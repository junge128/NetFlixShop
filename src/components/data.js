export default { 
    sku: {
      // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      tree: [
        {
          k: '时长',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '1个月'
            },
            {
              id: '3',
              name: '3个月'
            },
            {
              id: '6',
              name: '6个月'
            },
            {
              id: '12',
              name: '12个月'
            }
          ],
          k_s: 's1',
          count: 999
        },
        {
          k: '车位个数',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '1位'
            }
          ],
          k_s: 's2',
          count: 999
        }
      ],
      // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
      list: [
        {
          id: 1,
          price: 1500, //价格
          discount: 0.1, 
          s1: '1',
          s2: '1', 
          stock_num: 999 //库存 
        },
        {
          id: 2,
          price: 4500, //价格
          discount: 0.1, 
          s1: '3',
          s2: '1', 
          stock_num: 999 //库存 
        },
        {
          id: 3,
          price: 9000, //价格
          discount: 0.1, 
          s1: '6',
          s2: '1', 
          stock_num: 999 //库存 
        },
        {
          id: 4,
          price: 18000, //价格
          discount: 0.1, 
          s1: '12',
          s2: '1', 
          stock_num: 999 //库存 
        }
      ],
      price: '5.00',
      stock_num: 227, // 商品总库存
      hide_stock: true  // 是否隐藏剩余库存
    },
    goods_id: '946755', // 商品ID 
    quota: 1, //限购数量 
    hide_quota_text: true,  	//是否显示限购提示
    stepper_input: true,
    buy_text: '支付宝付款',
    goods_info: {
      title: '测试商品A',
      picture:
        'https://www.vip6.pro:8090/wx/storage/fetch/xqhw3gwe5ld2kmvbeu0i.jpg' 
    },
    initialSku:{
            s1: "0001",
            s2: "1001",
            selectedNum: 1
        }
  };