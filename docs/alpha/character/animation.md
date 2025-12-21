# 设置动画

同样也是一个函数

```lua
Character.playAnimation(id,layer,animation,isLoop)
```

| 参数        | 类型      | 说明                              |
| --------- | ------- | ------------------------------- |
| id        | string  | 角色唯一标识符                         |
| layer     | number  | 动画层级，当两个动画不冲突时可同时播放（如上身和下肢独立动画） |
| animation | string  | Spine 模型内动画的唯一标识符（动画名称）         |
| isLoop    | boolean | 是否循环播放                          |

##

因为此程序专注于2D平面，角色往往需要翻转朝向。
```lua
Character.flip(id,isLeft)
```
| 参数     | 类型      | 说明              |
| ------ | ------- | --------------- |
| id     | string  | 角色唯一标识符         |
| isLeft | boolean | 左为角色默认方向，控制角色朝向 |
