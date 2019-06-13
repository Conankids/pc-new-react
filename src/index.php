<!Doctype html>
<html xmlns=http://www.w3.org/1999/xhtml lang="zh-CN">
<head>
    <meta http-equiv=Content-Type content="text/html;charset=utf-8">
    <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
    <title><?php if(Yii::app()->controller->id=='index'){ echo '极果-全球好物消费推荐平台';}else{ echo CHtml::encode($this->pageTitle).'-极果';}?></title>
    <meta name="description" content="<?php echo $this->description;?>"  />
    <meta name="keywords" content="<?php echo $this->keywords;?>"  />
    <meta name="mobile-agent" content="format=html5;url=http://m.jiguo.com/" />
    <link rel="dns-prefetch" href="//www.jiguo.com">
    <link rel="dns-prefetch" href="//cdn.jiguo.com">
    <link rel="dns-prefetch" href="//s2.jiguo.com">
    <link rel="dns-prefetch" href="//pic.jiguo.com">
    <link rel="stylesheet" href="//cdn.jiguo.com/static/Pc/develope/style/css/base.css">
    <link rel="stylesheet" href="<?php echo CDN_PC_ROOT;?>/style/css/base.css">
</head>
<body>

<!--主体-->
<div id="app"></div>

  <%if(process.env.NODE_ENV == 'production'){%>
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?79716ddfe2f8942d32e445516e53e672";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
      <?php
        $array_data = array_merge(json_decode(CJSON::encode($blog), true), array(
            'content' => $blogfild->message,
            'img' => json_decode($blogfild->img, true) ? json_decode($blogfild->img, true) : array()
        ));
        if ($array_data['addtime']) {
            $array_data['addtime'] = date('m-d H:i:s', $array_data['addtime']);
        }
        $array_data = json_encode($array_data);
        $order_filter = array_filter($order,function ($item){
            return $item['article_type']!='2';
        });
        ?> window.__ORDER_META__ = <?php echo json_encode($order_meta);?>;
  window.__ORDER_META__ = window.__ORDER_META__ ? window.__ORDER_META__ : {};
  window.__BLOG_DATA__ = <?php echo $array_data;?>;
  window.__BLOG_DATA__ = window.__BLOG_DATA__ ? window.__BLOG_DATA__ : {};
  window.__ORDER_DATA__ = <?php echo json_encode(array_values($order_filter));?>;
  window.__BLOG_ID__ = window.__BLOG_DATA__ && window.__BLOG_DATA__.blogid;
</script>
      <%}else{%>
      // 测试数据
          window.__ORDER_META__ = {"event_title":"1225\u2014\u20142","cover":"3623079d-bae6-4d35-9286-dfb1de2f232b","buying_name":"\u6298\u6263\u8bd5\u7528","orderid":"201812261748573089"};
          window.__ORDER_META__ = window.__ORDER_META__ ? window.__ORDER_META__ : {};
          window.__BLOG_DATA__ = {"blogid":"26272","pid":"12015","status":"0","title":"\u65e0\u6807\u9898","cover":"e0f5a7aa-5786-483f-b73d-b0c677b50b29","banner":null,"tag":null,"addtime":"02-25 12:06:02","updatetime":"0","pidnum":"0","displayorder":"-2","praise":"0","reply":"0","stow":"0","author":"LoVe\u2600\u300e\u9633\u5149\u300f","uid":"6734844","productinfo":null,"type":"4","issync":"","feature":null,"ischecked":"0","describe":"","isgift":"0","orderid":"201812261748573089","merit":[],"defect":[],"jinghua":"0","button":null,"button_link":null,"listorder":"0","video":"0","first_check_status":"0","first_check_remark":"","is_original":"0","groupid":"0","is_featured":"0","cid1":"0","cid2":"0","cid3":"0","read_num":"0","score":"0.0","score_num":"0","score_meta":null,"is_article_jingxuan":"0","is_edit":"0","hot_list":"0","score_sort":"0.0","share_card":null,"content":"<p><img id=\"id06518351407029415-thumbview\" src=\"http:\/\/s1.jiguo.com\/e20d0d4a-8b82-4241-a602-63b638861d1f\/logo\" title=\"640 (6)\" alt=\"640 (6)\" data-width=\"640\" data-height=\"400\" data-img-type=\"2\" data-ratio=\"1.6\" data-original=\"http:\/\/s1.jiguo.com\/e20d0d4a-8b82-4241-a602-63b638861d1f\/640\"\/><\/p><p><br\/><\/p><p><strong>dsadsadasdasdas<\/strong><\/p>","img":[]};
          window.__BLOG_DATA__ = window.__BLOG_DATA__ ? window.__BLOG_DATA__ : {};
          window.__ORDER_DATA__ = [{"orderid":"201812251630247648","uid":"6734844","groupid":"0","eventid":"1857","mid":"8533","username":"","tel":"17637545308","province":"","city":"","county":"","address":"","postalcode":"","addtime":"1545726624","updatetime":"1550805779","endtime":"1545727524","isblog":"0","meta":"","status":"3","is_send":"1","type":"1","article_type":"1","payment":"ali","paytime":"0","remarks":"","isjiguo":"0","ecompany":"\u4e2d\u901a","eorderid":"=VLOOKUP(A11,[1]Worksheet!$A:$","price":"0.51","deposit":"0.01","update":"0","product_remarks":"","model":null,"send_time":"1550805779","refund_type":"0","refund_status":"0","refund_check_message":"","refund_message":"","refund_id":"0","refund_amount":"0.00","spec_id":"0","spec_name":"\u5927\u7801","storage_id":"6604","receive_text":"","receive_pic":"","jiguo_address":"","jiguo_receiver_name":"","jiguo_tel":"","return_message":"","send_blog_time":"1551928979","is_send_blog":"0","is_blog_write":"0","old_status":null,"send_price":"0.00","spec_remarks":"","cid":"0","cprice":"0.00","iscoupon":"0","pprice":"0.50","spread_code":null,"cancel_reason":"","title":"\u7ea4\u7ef4\u5bc6\u7801 \u5546\u52a1\u9676\u74f7\u4fdd\u6696\u886c\u886b----swift1","url":"http:\/\/www.jiguo.com\/user\/post.html?type=2&orderid=201812251630247648","displayorder":null,"event_title":"\u7ea4\u7ef4\u5bc6\u7801 \u5546\u52a1\u9676\u74f7\u4fdd\u6696\u886c\u886b","cover":"8c14c17e-4a3b-45ab-9333-f215c0007269","buying_name":"swift1","draft_num":"0"},{"orderid":"201812261748573089","uid":"6734844","groupid":"0","eventid":"1866","mid":"8553","username":"","tel":"17637545308","province":"","city":"","county":"","address":"","postalcode":"","addtime":"1545817737","updatetime":"1550805779","endtime":"1545818637","isblog":"0","meta":"{\"price\":\"0.20\",\"deposit\":\"0.10\"}","status":"3","is_send":"1","type":"1","article_type":"1","payment":"wx","paytime":"0","remarks":"","isjiguo":"0","ecompany":"\u4e2d\u901a","eorderid":"=VLOOKUP(A18,[1]Worksheet!$A:$","price":"0.20","deposit":"0.10","update":"0","product_remarks":"","model":null,"send_time":"1550805779","refund_type":"0","refund_status":"0","refund_check_message":"","refund_message":"","refund_id":"0","refund_amount":"0.00","spec_id":"0","spec_name":"","storage_id":"6624","receive_text":"","receive_pic":"","jiguo_address":"","jiguo_receiver_name":"","jiguo_tel":"","return_message":"","send_blog_time":"1551928979","is_send_blog":"0","is_blog_write":"0","old_status":null,"send_price":"0.00","spec_remarks":"","cid":null,"cprice":null,"iscoupon":null,"pprice":"0.10","spread_code":"","cancel_reason":"","title":"1225\u2014\u20142----\u6298\u6263\u8bd5\u7528","url":"http:\/\/www.jiguo.com\/user\/post.html?type=2&orderid=201812261748573089","displayorder":"-2","event_title":"1225\u2014\u20142","cover":"3623079d-bae6-4d35-9286-dfb1de2f232b","buying_name":"\u6298\u6263\u8bd5\u7528","draft_num":"1"}];
          window.__BLOG_ID__ = window.__BLOG_DATA__ && window.__BLOG_DATA__.blogid;
      <%}%>
</body>
</html>
