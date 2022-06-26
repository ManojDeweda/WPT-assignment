Create  table   item 
( itemno integer primary key,
 itemname varchar(15),
 price integer,
 category varchar(15)
 );
 
insert into item(itemno, itemname, price, category) values
(1,'pencil',5,'stationery'),
(2,'pen',10,'sta'),
(3,'box',20,'stationery');

update item set category ='stationery' ,price =15 where itemno =2;

select * from item where itemno=2;

select * from item where category='stationery';