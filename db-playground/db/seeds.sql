INSERT INTO Days (date, event, start, end)
VALUES ('2018-09-18', 'oil_change', '2018-09-18T08:00:00', '2018-09-18T09:30:00');

INSERT INTO Blackouts (start, end, ServiceID)
VALUES ('2018-09-18', '2018-09-18T08:00:00', 1);

INSERT INTO Profiles (day, max_simul, start, end)
VALUES ('2018-09-18', 'oil_change', '2018-09-18T08:00:00', '2018-09-18T09:30:00');

INSERT INTO Services (name, max_simul, duration)
VALUES ('oil_change', 3, 90);

DROP DATABASE IF EXISTS scheduley;
CREATE DATABASE scheduley; 
USE scheduley;

SELECT * FROM Services;
SELECT * FROM Events;
DELETE FROM Events WHERE event='engine_remount';

INSERT INTO Days (day)
VALUES ('2018-09-19'), ('2018-09-20'), ('2018-09-21'), ('2018-09-22'), ('2018-09-23'), ('2018-09-24'), ('2018-09-25');

INSERT INTO Events (DayDay, event, start, end, ServiceId)
VALUES ('2018-09-20', 'engine_remount', '2018-09-20T09:00:00', '2018-09-20T10:30:00', 1);



INSERT INTO Events (DayDay, event, start, end, ServiceId)
VALUES ('2018-09-18', 'oil_change', '2018-09-18T09:00:00', '2018-09-18T09:45:00'),
('2018-09-18', 'oil_change', '2018-09-18T09:00:00', '2018-09-18T09:45:00'), 
('2018-09-18', 'engine_remount', '2018-09-19T09:00:00', '2018-09-18T09:45:00'), 
('2018-09-19', 'oil_change', '2018-09-19T10:00:00', '2018-09-18T10:45:00');

INSERT INTO Events (DayDay, event, start, end)
VALUES ('2018-09-18', 'open', '2018-09-18T08:00:00', '2018-09-18T17:00:00'),
('2018-09-19', 'open', '2018-09-19T08:00:00', '2018-09-19T17:00:00'),
('2018-09-20', 'open', '2018-09-20T08:00:00', '2018-09-20T17:00:00'),
('2018-09-21', 'open', '2018-09-21T08:00:00', '2018-09-21T17:00:00'),
('2018-09-22', 'open', '2018-09-22T08:00:00', '2018-09-22T17:00:00'),
('2018-09-23', 'open', '2018-09-23T08:00:00', '2018-09-23T17:00:00'),
('2018-09-24', 'open', '2018-09-24T08:00:00', '2018-09-24T17:00:00');


INSERT INTO Services (name, max_simul, duration)
VALUES ('engine_remount', 3, 90);