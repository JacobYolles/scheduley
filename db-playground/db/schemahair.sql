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
