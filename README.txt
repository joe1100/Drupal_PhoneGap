Drupal & PhoneGap –移动应用调用Drupal服务

一. 配置大纲
◎Drupal - Services模块配置
◎PhoneGap Application –PhoneGap程序连接Services服务
◎PhoneGap Application – PhoneGap程序登录Drupal系统
◎PhoneGap Application – PhoneGap程序读取Drupal系统文章信息
二. 前提条件
1、安装Drupal并配置好前置模块。
2、理解RESTful概念并熟悉调用方式。
3、Web编程相关技术(HTML\JavaScript\CSS\PHP)。
4、熟练使用JSON

三. 工具和原件
1、Drupal 7.x
2、PhoneGap
3、JQuery Mobile
4、Eclipse
5、Android Emulator

四. 具体配置\开发步骤
1、安装配置Drupal
下载Drupal核心包安装,安装Drupal常用模块(Services依赖模块Chaos tools、token、Libraries 必须安装)，安装成功之后启用相应模块，这里详细介绍Services模块的配置：※ 下载并安装Services模块
Services模块安装成功后如需要发布RESTful还需要spyc下载spyc并将spyc.php文件放到以下目录www/my_drupal_site/sites/all/modules/services/servers/rest_server/lib
然后启用Services以及REST Server模块。
※	添加服务
点击菜单“结构”>”Services”进入Services操作界面，点击添加链接进入Services编辑页面，输入相关信息并点击保存按钮，参照下图：
 
※	设置Rest Service资源
在服务列表页面找到“操作”列，点击刚才设置的“my_drupal_services”后面的“Edit Resources”连接，选择你想启用的资源或方法,然后点击保存。点击向右的三角形列出服务子服务。参照下图：
 

针对本例我们启用以下服务:
Node(retrieve
create
update
delete)
system(connect)
user(login
   logout)
※	设置Rest Service请求应答格式
服务资源设置好之后选择“SERVER”标签切换到请求应答格式设置页面.勾选应答请求格式。参考下图:
 
Response格式(json
		xml
)
Request设置(application/json
		application/x-www-form-urlencoded
		application/xml
)

五． 测试Rest Service是否可以正常联通
使用Firefox的Poster插件进行测试，Poster成功安装后点击Firefox的工具下拉菜单找到Poster,输入参数信息，点击“POST”按钮。如下图
 
如果参数信息填写正确，drupal网站也能够正常打开的情况向将会得到以下返回信息：
{"sessid":"yV2HQAkxGlusF0Zeil2NQR8SUxWCG1smn6DEyenO4Lw","session_name":"SESSce14c3d6efaf4ce631aac1ef75e1aa8b","user":{"uid":0,"hostname":"172.118.0.32","roles":{"1":"anonymous user"},"cache":0}}
此时是用户没有登录的情况下返回的信息。到这一步本示例Drupal端的配置已经完毕.

六. PhoneGap程序登录Drupal系统
1、Android Hello World和PhoneGap Hello World这里就不再赘述了，参考以下两个连接:
※ Android http://developer.android.com/training/basics/firstapp/index.html
※ PhoneGap
http://www.phonegapcn.com/developers/get-started-13/get-started
2、本示例采用JQuery Mobile来完成UI工作，所以需要下载JQuery相关的库.
※ jquery.mobile-1.3.2.min.css
※ jquery-1.10.2.min.js
※ jquery.mobile-1.3.2.min.js
将上面三个文件放到项目文件夹/assets/www/下。
3、创建index.html页面，创建main.html页面,具体代码查看项目assets\www\index.html、assets\www\main.html.
4、新建项目所需的脚步文件
※新建文件夹/assets/www/scripts
※在Scripts文件夹创建两个js文件(dashboard.js, login.js).具体代码查看项目/assets/www/scripts/dashboard.js, /assets/www/scripts/login.js.
5、运行PhoneGap程序
点击eclipse项目文件右键Run As>Android Application运行程序，此步骤需建立在已创建AVD的情况下才能够进行。
此时如果代码和环境没有错误将会看到模拟器出现如下界面
 
点击Login按钮进入登录界面,
 
输入Drupal已存在的用户名密码，点击“Login”即可登录Drupal系统，此时可以登录到Drupal系统管理界面查看“报告>最新日志信息”，将会看到如下日志记录(登录时间点)表明用户已经通过移动程序成功登录Drupal系统。
 

七. PhoneGap程序读取Drupal系统文章信息
1、main.html添加div页，id为page_node_retrieve，具体查看/assets/www/main.h
tml代码.
2、添加文章节点读取js， 具体代码参考/assets/www/scripts/node_retrieve.js
2、点击“Node Retrieve”将会进入节点文章查看界面，点击“retrieve”按钮查看设定的文章信息。如图
 

可以看到这一篇文章是通过Drupal创建的，移动程序通过调用Rest Server服务的方式读出来。

八. 总结
此示例仅仅是一个通过PhoneGap实现连接、登录、检索Drupal系统的一个简单程序，其功能只是证明这样的方式是可行的一种方案，起到抛砖引玉的效果，并不能当一个作商业项目来看待，如果是要在这基础上做成一个可用的、功能完善成熟app还需要做很多工作。
