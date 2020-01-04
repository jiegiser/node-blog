

use myblog;
-- 显示所有表
show tables;
-- 插入数据
insert into users(username, `password`, realname)
values('lisi', '123', '李四')
-- 查询数据
select * from users where username = 'jiegiser' order by asc
-- 删除数据
delete from users where id = 2
-- 更新数据
SET SQL_SAFE_UPDATES = 0
update users set realname='李四' where username = 'lisi'
update users set state = 0 where username = 'lisi' -- 软删除

insert into blogs(title, content, createtime, author)
values('标题1', '内容2', '1578118645718', 'lisi')
select * from blogs

select version()

 