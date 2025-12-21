# 时间线

感谢 [@Weacksdy](https://github.com/Weacksdy) 提供的解决方案！

本模块提供基于 Lua 的**时间线功能**，可以线性控制脚本流程。  

> 所有流程均由 Lua 控制，你需要引用 `timeline` 库来创建和管理时间线。


## 创建时间线

```lua
local Timeline = require "timeline"
local tml = Timeline(function(builder)
    builder.sleep(1.0)
    print("1.0 seconds passed")
    
    builder.sleep(0.5)
    print("1.5 seconds passed")
    
    Gwin.applyScreenFilter("OPPOSITE")
    
    builder.sleep_frame(30)
    print("1.5 + 30 frames passed")
    
    builder.stop()
    print("This message should not be printed")
end)
```
| 参数 / 对象   | 类型    | 说明                                                                                                  |
| --------- | ----- | --------------------------------------------------------------------------------------------------- |
| `builder` | table | 时间线控制器，包含以下方法：<br>- `sleep(seconds)`：暂停指定秒数<br>- `sleep_frame(frames)`：暂停指定帧数<br>- `stop()`：停止当前时间线 |
## 注入主循环
时间线需要在每帧更新中被调用
```lua
function Gwin.update(data)
    tml.update(tml, data.dt)
end
```
## 循环时间线
你可以制作循环监听的时间线，例如两秒执行一次
```lua
local tml = Timeline(function(builder)
    while true do
        builder.sleep(2)
        print("2 秒一次")
    end
end)

```