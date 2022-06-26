create table account 
(
caccno bigint primary key,
cname varchar(20),
cbalence float
);

desc account;

insert into account(caccno,cname,cbalence) values
(980211111111111,'Manoj Deweda',500000.0),
(980222222222222,'abc',200000.0),
(980233333333333,'xyz',100000.0);

select * from account;

select cbalence from account where caccno=980211111111111;

