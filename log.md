<!--
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-01-15 09:00:01
 * @LastEditors  : jiegiser
 * @LastEditTime : 2020-01-15 09:04:23
 -->
# 日志按照时间进行拆分

`linux`的`crontab`命令，即定时任务。
`*`代表：分钟小时日期月份星期
设置定时任务，格式:`*****command`
将`access.log`拷贝并重命名为`日期+access.log`
清空`access.log`文件，继续积累日志