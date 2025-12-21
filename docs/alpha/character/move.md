# 移动你的角色

目前支持设置和线性移动。

### 坐标变换

```lua
Character.setPos(id,x,y)
```

| 参数 | 类型     | 说明      |
| -- | ------ | ------- |
| id | string | 角色唯一标识符 |
| x  | number | x轴坐标    |
| y  | number | y轴坐标    |


### 平滑移动

```lua
Character.moveTo(id,x,y,type)
```
| 参数   | 类型     | 说明                        |
| ---- | ------ | ------------------------- |
| id   | string | 角色唯一标识符                   |
| x    | number | 目标 x 坐标                   |
| y    | number | 目标 y 坐标                   |
| type | string | 坐标移动曲线，目前为占位符，后续将引入实际曲线类型 |
