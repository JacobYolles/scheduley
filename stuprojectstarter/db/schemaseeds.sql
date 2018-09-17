DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

-- SERVICE ONE: HAIRCUTS:

DROP DATABASE IF EXISTS hair_services_db;
CREATE DATABASE hair_services_db;
USE hair_services_db;

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

-- SERVICE TWO: AUTOBODY SHOP:

DROP DATABASE IF EXISTS auto_services_db;
CREATE DATABASE auto_services_db;
USE auto_services_db;

CREATE TABLE work (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    service_provided VARCHAR(100) NOT NULL,
    days_provided VARCHAR(100) NOT NULL,
    current_price DECIMAL(4, 2) ZEROFILL NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO work (service_provided, days_provided, current_price)
VALUES            ("Oil Change", "Monday Tuesday Wednesday Thursday Friday", 25.00);

INSERT INTO work (service_provided, days_provided)
VALUES            ("Engine Replacement", "Monday Tuesday Thursday Friday");

INSERT INTO work (service_provided, days_provided, current_price)
VALUES            ("Inspection", "Monday Friday", 10.00);