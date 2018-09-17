DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;
USE services_db;


CREATE TABLE offer (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    service_provided VARCHAR(100) NOT NULL,
    days_provided VARCHAR(100) NOT NULL,
    current_price DECIMAL(4, 2) ZEROFILL NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO offer (service_provided, days_provided, current_price)
VALUES            ("Mens Haircut", "Monday Tuesday Wednesday Thursday Friday", 10.75);

INSERT INTO offer (service_provided, days_provided, current_price)
VALUES            ("Hair Coloring", "Tuesday Thursday", 20.25);

INSERT INTO offer (service_provided, days_provided, current_price)
VALUES            ("Close Shave - Men", "Monday Wednesday Friday", 5.50);


USE services_db;

CREATE TABLE repair (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    service_provided VARCHAR(100) NOT NULL,
    days_provided VARCHAR(100) NOT NULL,
    current_price DECIMAL(5, 2) ZEROFILL,
    servicing_technician VARCHAR(100),
    PRIMARY KEY (id)
);

INSERT INTO repair (service_provided, days_provided, current_price, servicing_technician)
VALUES            ("Oil Change", "Monday Tuesday Wednesday Thursday Friday", 25.00, "Bob");

INSERT INTO repair (service_provided, days_provided, current_price, servicing_technician)
VALUES            ("Engine Replacement", "Monday Tuesday Thursday Friday", 250.00, "Brad");

INSERT INTO repair (service_provided, days_provided, current_price)
VALUES            ("Inspection", "Monday Friday", 10.00);