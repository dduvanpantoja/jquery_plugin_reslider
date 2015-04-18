# jquery-reSlider v1.0
jquery插件 jquery-reSlider
>更新信息

2015-04-18
+ 第一个版本上线
+ 添加基础功能
+ 全屏轮播，震撼的视觉效果

>预计增加功能

+ 初始预加载
+ 加入加载进度
+ 优化整体加载效果


>简介

+ 这是一款全屏轮播插件，非常简单
+ 使用场景全屏企业网站上，做展示效果

>基本用法

1.首先先引入组件的javascript文件，和依赖的jquery库

		<!-- jQuery -->
		<script src="assets/js/lib/jquery.min.js"></script>
        <!-- Client JavaScript -->
        <script src="assets/js/jquery.reslider.js"></script>
        
2.基本HTML结构如下：要保证类名的准确无误

		<!-- slider-->
            <div class="slider">
                <div class="jquery-reslider">
                    <div class="slider-block" data-url="assets/images/test.jpg"></div>
                    <div class="slider-block" data-url="assets/images/test2.jpg"></div>
                    <div class="slider-block" data-url="assets/images/test3.jpg"></div>
                    <div class="slider-block" data-url="assets/images/test2.jpg"></div>

                    <div class="slider-direction slider-direction-next"></div>
                    <div class="slider-direction slider-direction-prev"></div>

                    <div class="slider-dots">
                      <ul>

                      </ul>
                    </div>
                </div>
            </div>
        <!-- end build-->
        
 3.调用方法：
 在刚刚引入的script文件下一行键入
 
 		<script>
            $(function(){
                $('.jquery-reslider').reSlider({
                    speed:1000,//设置轮播的高度
                    delay:5000,//设置轮播的延迟时间
                    imgCount:4,//设置轮播的图片数
                    dots:true,//设置轮播的序号点
                    autoPlay:true//设置轮播是否自动播放
                })
            })
        </script>
        
 >参数说明
 
 + speed
 
 		默认值为1000  用于图片切换过渡速度
        
 + delay
 
 		默认值为5000  用于调节自动播放时间
        
 + imgCount
 
 		默认值为4  用于设置图片个数
        
 + dots
 
 		默认值为true  用于设置轮播的序号点
 		
 + autoPlay
 
 		默认值为true  用于设置是否自动播放

>[demo预览地址](http://demo.wangwenyu.com/jquery_plugin_reslider/)


