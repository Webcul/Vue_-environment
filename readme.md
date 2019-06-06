## 技术选型

![1559706160501](C:\Users\32193\AppData\Roaming\Typora\typora-user-images\1559706160501.png)



 babel-preset-es2015在2017年停止使用，下载

```text
npm uninstall --save-dev babel-preset-es2015
npm install --save-dev babel-preset-env@next
```



autoprefixer-loader也停止使用

![1559718444756](C:\Users\32193\AppData\Roaming\Typora\typora-user-images\1559718444756.png)



源：

```text
npm i mint-ui vue-preview axios vue-router monent vue - S;
npm i webpack html - webpack - plugin css - loader style - loader less less - loader autoprefixer - loader babel - loader babel - core babel - preset - es2015 babel - plugin - transform - runtime url - loader file - loader vue - loader vue - template - compiler webpack-dev-server - D
```







目录结构：

![1559724511697](C:\Users\32193\AppData\Roaming\Typora\typora-user-images\1559724511697.png)







第一：

```text
1、npm init

2、npm install webpack webpack-cli vue-loader -D

3、npm install vue-template-compiler css-loader file-loader style-loader url-loader
html-webpack-plugin cross-env -D
```



补充：

```text
1、npm i mint-ui vue -S   

2、npm i vue-preview -S  

3、npm i axios vue-router moment vue -S

4、npm i less less-loader -D    //S

//autoprefixer-loader在2017年被弃用，用postcss-loader代替

5、npm i postcss-loader -D	

6、npm -i babel-loader babel-core -D

7、npm i babel-preset-env@next -D    //S

8、npm i babel-plugin-transform-runtime -D   //S

9、npm i url-loader file-loader -D

10、npm i webpack-dev-server -D
```



![1559734162971](C:\Users\32193\AppData\Roaming\Typora\typora-user-images\1559734162971.png)

vue-loader高版本需引入

```text
const VueLoaderPlugin = require('vue-loader/lib/plugin');
```



错误：

```javascript
ERROR in ./node_modules/mint-ui/lib/style.css (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/mint-ui/lib/style.css)
Module build failed (from ./node_modules/postcss-loader/src/index.js):
`Error: No PostCSS Config found in: C:\Users\32193\Desktop\vue_project\node_modules\mint-ui\lib`
    at config.load.then (C:\Users\32193\Desktop\vue_project\node_modules\postcss-load-config\src\index.js:55:15)
 @ ./node_modules/mint-ui/lib/style.css 2:14-101
 @ ./src/main.js
```

解决：

在项目根目录创建```post.config.js ```文件,文件内容如下：



```text
module.exports = {
    plugins: {
        'autoprefixer': {browsers: 'last 5 version'}
    }
}
```

重新打包（npm run dev）即可解决postcss问题。



其实这个配置文件在官方文档中已经说了，毕竟第一次用看不懂还是可以原谅的，hhh。

可能有人不知道在`webpack.config.js`中怎么配置,这里我将配置和版本附给大家



附：

**webpack.config.js**

```javascript
			{
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
```



版本：

```text
"css-loader": "^2.1.1",
"less": "^3.9.0",
"less-loader": "^5.0.0",
"postcss-loader": "^3.0.0",
"style-loader": "^0.23.1"
```

