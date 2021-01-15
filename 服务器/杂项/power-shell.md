# powerShell

### 一些常用的命令
1. rm -rf🙂

### PowerShell命令行与其他命令行解释器的内部和外部命令的[比较](https://zh.wikipedia.org/wiki/Windows_PowerShell)
| PowerShell（命令行） | PowerShell（别名） | 命令提示符 | Unix shell | 描述 |
|:----|:----:|:----:|:----:|:----:|
|Get-ChildItem|gci, dir, ls|dir|ls|列出当前或给定文件夹中的所有文件和文件夹|
|Test-Connection|ping|ping|ping|从当前计算机向指定计算机发送互联网控制消息协议回显请求，或指示另一台计算机这样做|
|Get-Content|gc, type, cat|type|cat|cat|
|Get-Command|gcm|help|type, which, compgen|列出可用的命令|
|Get-Help|help, man|help|apropos, man|在控制台上打印命令的文档|
|Clear-Host|cls, clear|cls|clear|清除屏幕|
|Copy-Item|cpi, copy, cp|copy, xcopy, robocopy|cp|将文件和文件夹复制到另一个位置|
|Move-Item|mi, move, mv|move|mv|将文件和文件夹移动到新位置|
|Remove-Item|ri, del, erase, rmdir, rd, rm|del, erase, rmdir, rd|rm, rmdir|删除文件或文件夹|
|Rename-Item|rni, ren, mv|ren, rename|mv|重命名单个文件，文件夹，硬链接或符号链接|
|Get-Location|gl, cd, pwd|cd|pwd|显示工作路径（当前文件夹）|
|Pop-Location|popd|popd|popd|将工作路径更改为最近推送到堆栈上的位置|
|Push-Location|pushd|pushd|pushd|将工作路径存储到堆栈中|
|Set-Location|sl, cd, chdir|cd, chdir|cd|改变工作路径|
|Tee-Object|tee|不适用|tee|将输入管道传输到文件或变量，并沿管道传递输入|
|Write-Output|echo, write|echo|echo|将字符串或其他对像打印到标准流|
|Get-Process|gps, ps|tlist tasklist|ps|列出所有正在运行的进程|
|Stop-Process|spps, kill|kill taskkill|kill|停止正在运行的进程|
|Select-String|sls|findstr|find, grep|打印与模式匹配的行|
|Set-Variable|sv, set|set|env, export, set, setenv|创建或更改环境变量的内容|
|Invoke-WebRequest|iwr|curl|wget, curl|获取因特网上的网页内容|


### 列举一些目前用到的命令
1. 删除并排除 ```rm -rf `ls |egrep -v '(build|example|dist|.gitignore|README.md)'` ``` 

2. 复制 ``` cp -r dist/* ./ ```

