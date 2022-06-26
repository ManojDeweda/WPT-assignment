Create table  resource 
( resourceid integer primary key, 
resourcename varchar(15), 
status boolean
);

insert into resource(resourceid, resourcename, status) values
(1,'abc',true),
(2,'def',true),
(3,'pqr',true);

update resource set status = false where resourceid = 2;

select * from resource where status =true;

select * from resource where resourceid=2;
