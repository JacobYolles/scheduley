INSERT INTO Days (date, event, start, end)
VALUES ('2018-09-18', 'oil_change', '2018-09-18T08:00:00', '2018-09-18T09:30:00');

INSERT INTO Blackouts (start, end, ServiceID)
VALUES ('2018-09-18', '2018-09-18T08:00:00', 1);

INSERT INTO Profiles (day, max_simul, start, end)
VALUES ('2018-09-18', 'oil_change', '2018-09-18T08:00:00', '2018-09-18T09:30:00');

INSERT INTO Services (name, max_simul, duration)
VALUES ('oil_change', 3, 90);

