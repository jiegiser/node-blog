###
 # @Descripttion: 
 # @Author: jiegiser
 # @Date: 2020-01-15 09:10:32
 # @LastEditors  : jiegiser
 # @LastEditTime : 2020-01-15 09:15:43
 ###
#!/bin/sh
cd F:\myGithub\node-blog\logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log