# 插件

这是个正在开发的功能！为了少写代码而写了更多代码（

## 

鉴于WinAPI的复杂，不可能将所有需求都覆盖。所以提供将winAPI的功能以exe插件的形式插入到系统内。

您需要如下两个文件来制作您的程序插件: 可执行的**exe文件** 和 声明输出输入的**yml文件**。其中这两个文件必须同名且不与其他插件名重复

exe需要通过stdin和stdout来实现输入输出，对于yml，一个基础的配置文件的结构如下

```yml
name: 名称 #这里的名称实际上是无实际作用的，真正参与注册的实际上是文件名
version: 版本号
author: 作者名称
description: 描述内容
memories: 1000 #单位是KB
io:
  input: #输入声明
    type: string
  output: 
    type: json
    schema:
      name: 
        type: string
        enum: ["uewa","name"]  
      value: 
        type: array
        items:
          type: number
  
```

我们支持的数据类型为 *number*, *string*, *boolean*, *array*, *json*（纯数据对象），提供枚举支持，通过 *stdin* 和 *stdout* 请使用getline获取单行和输出单行
