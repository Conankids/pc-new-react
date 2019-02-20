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
