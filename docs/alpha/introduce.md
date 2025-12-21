# 介绍

## 程序架构

SFBE 的整体架构设计采用经典的三层分离结构：**脚本层（Lua）** → **系统层（主进程）** → **渲染层（渲染进程）**。
核心交互流程如下所示：

```mermaid
sequenceDiagram
  participant S as 脚本层 (Lua)
  participant SYS as 系统层 (Electron 主进程)
  participant R as 渲染层 (PixiJS + Spine)

  Note over S,SYS: Lua 脚本通过 Fengari VM 执行
  S->>+SYS: 发送控制命令<br>(如播放动画、移动角色、检测碰撞)
  SYS->>+R: 通过 IPC 转发指令
  R-->>-SYS: 返回执行结果或事件<br>(如碰撞信息、动画完成)
  SYS-->>-S: 将结果回传给 Lua 脚本

  Note over SYS: 系统层同时负责：<br>· 主循环<br>· 音频播放<br>· 系统输入事件（如键盘、鼠标）
  Note over R: 渲染层专注：<br>· Spine 骨骼动画渲染<br>· 角色唯一 ID 管理<br>· 角色状态与碰撞箱管理<br>· PixiJS 场景绘制
  ```
