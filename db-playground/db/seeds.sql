DROP DATABASE IF EXISTS scheduley;
CREATE DATABASE scheduley; 
USE scheduley;

SELECT * FROM Customers;
SELECT * FROM Events;
DELETE FROM Services WHERE name='engine_remount';

INSERT INTO Days (day)
VALUES ('2018-09-18'), ('2018-09-19'), ('2018-09-20'), ('2018-09-21'), ('2018-09-22'), ('2018-09-23'), ('2018-09-24');

INSERT INTO Services (name, max_simul, duration)
VALUES ('Engine Remount', 3, 90), ('Oil Change', 2, 60), ('Tire Rotation', 4, 45);

INSERT INTO Events (DayDay, event, start, end, ServiceId)
VALUES ('2018-09-21', 'Engine Remount', '2018-09-21T09:00:00', '2018-09-21T10:30:00', 1),
('2018-09-21', 'Oil Change', '2018-09-21T10:00:00', '2018-09-21T11:00:00', 2),
('2018-09-21', 'Tire Rotation', '2018-09-21T09:00:00', '2018-09-21T09:45:00', 3); 


INSERT INTO Events (DayDay, event, start, end)
VALUES ('2018-09-18', 'open', '2018-09-18T08:00:00', '2018-09-18T17:00:00'),
('2018-09-19', 'open', '2018-09-19T08:00:00', '2018-09-19T17:00:00'),
('2018-09-20', 'open', '2018-09-20T08:00:00', '2018-09-20T17:00:00'),
('2018-09-21', 'open', '2018-09-21T08:00:00', '2018-09-21T17:00:00'),
('2018-09-22', 'open', '2018-09-22T08:00:00', '2018-09-22T17:00:00'),
('2018-09-23', 'open', '2018-09-23T08:00:00', '2018-09-23T17:00:00'),
('2018-09-24', 'open', '2018-09-24T08:00:00', '2018-09-24T17:00:00');