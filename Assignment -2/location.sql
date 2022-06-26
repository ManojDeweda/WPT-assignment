create table location 
(
pincode integer primary key,
areaname varchar (20)

);
desc location;

insert into location (pincode,areaname) values
(454446,'manawar'),
(123456,'abc'),
(111111,'xyz'),
(222222,'pqr');

select * from location;

select areaname from location where pincode=454446;