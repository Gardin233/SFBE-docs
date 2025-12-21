# 音频

因为难度的问题，目前是暂时的解决方案,所以播放的参数可能不起作用
## 
注册BGM文件
```lua
Audio.loadBGMFiles(urls)
```

| 参数   | 类型                          | 说明                             |
| ---- | --------------------------- | ------------------------------ |
| urls | {id: string, url: string}[] | BGM 文件链接数组，每个元素包含唯一 id 和文件 url |
## 
注册SFX文件
```lua
Audio.loadSFXFiles(urls)
```
| 参数   | 类型                          | 说明                             |
| ---- | --------------------------- | ------------------------------ |
| urls | {id: string, url: string}[] | SFX 文件链接数组，每个元素包含唯一 id 和文件 url |
##
卸载指定BGM
```lua
function Audio.unloadBGM(id)end
```
| 参数 | 类型     | 说明               |
| -- | ------ | ---------------- |
| id | string | 唯一标识符，指定要卸载的 BGM |

卸载指定SFX
```lua
function Audio.unloadSFX(id)end
```
| 参数 | 类型     | 说明               |
| -- | ------ | ---------------- |
| id | string | 唯一标识符，指定要卸载的 SFX |
## 
播放BGM
```lua
function Audio.playBGM(id,data)end
```
| 参数   | 类型     | 说明                                                                                                                                |
| ---- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| id   | string | 唯一标识符，指定要播放的 BGM                                                                                                                  |
| data | table  | 播放参数表，包括：<br>- `volume` (number)：音量<br>- `loop` (boolean)：是否循环<br>- `fadeIn` (number)：淡入时间（秒）<br>- `startTime` (number)：起始播放时间（秒） |
## 
播放SFX
```lua
function Audio.playSFX(id,data)end
```
| 参数   | 类型     | 说明                                                                                                                                |
| ---- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| id   | string | 唯一标识符，指定要播放的 SFX                                                                                                                  |
| data | table  | 播放参数表，包括：<br>- `volume` (number)：音量<br>- `loop` (boolean)：是否循环<br>- `fadeIn` (number)：淡入时间（秒）<br>- `startTime` (number)：起始播放时间（秒） |
