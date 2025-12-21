# 碰撞箱

获取碰撞箱

```lua
Character.getHitBox(id,func)
```


| 参数   | 类型                                                             | 说明                               |
| ------ | ---------------------------------------------------------------- | ---------------------------------- |
| `id`   | string                                                           | 角色唯一标识符                     |
| `func` | function(err: string, data: { name: string, verts: number[] }[]) | 回调函数，返回错误信息或碰撞盒数据 |

## 

展示碰撞箱

```lua
Character.showHitBox(id)
```
| 参数 | 类型     | 说明      |
| -- | ------ | ------- |
| id | string | 角色唯一标识符 |


## 

检测被触碰的碰撞箱

```lua
Character.checkHit(id,x,y,func)
```
| 参数   | 类型                               | 说明               |
| ---- | -------------------------------- | ---------------- |
| id   | string                           | 角色唯一标识符          |
| x    | number                           | x轴坐标             |
| y    | number                           | y轴坐标             |
| func | function(err: string, data: any) | 回调函数，返回错误信息或检测结果 |


## 

获取点坐标于碰撞箱间的距离

```lua
 Character.getPosToHitBoxDistance(id,x,y,func)
```
| 参数   | 类型                               | 说明               |
| ---- | -------------------------------- | ---------------- |
| id   | string                           | 角色唯一标识符          |
| x    | number                           | x轴坐标             |
| y    | number                           | y轴坐标             |
| func | function(err: string, data: any) | 回调函数，返回错误信息或距离数据 |
