CREATE TABLE hair (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    service_provided VARCHAR(100) NOT NULL,
    days_provided VARCHAR(100) NOT NULL,
    current_price DECIMAL(4, 2) ZEROFILL NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO hair (service_provided, days_provided, current_price)
VALUES            ("Mens Haircut", "Monday Tuesday Wednesday Thursday Friday", 10.75);

INSERT INTO hair (service_provided, days_provided, current_price)
VALUES            ("Hair Coloring", "Tuesday Thursday", 20.25);

INSERT INTO hair (service_provided, days_provided, current_price)
VALUES            ("Close Shave - Men", "Monday Wednesday Friday", 5.50);


CREATE TABLE hairs (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    service_provided VARCHAR(100) NOT NULL,
    days_provided VARCHAR(100) NOT NULL,
    current_price DECIMAL(4, 2) ZEROFILL NOT NULL,
    small_bio VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO hairs (service_provided, days_provided, current_price, small_bio)
VALUES            ("Mens Haircut", "Monday Tuesday Wednesday Thursday Friday", 10.75, "Get a relaxing haircut courtesy of Juan.");

INSERT INTO hairs (service_provided, days_provided, current_price, small_bio)
VALUES            ("Hair Coloring", "Tuesday Thursday", 20.25, "Get that look you always wanted, courtesy of Alexa.");

INSERT INTO hairs (service_provided, days_provided, current_price, small_bio)
VALUES            ("Close Shave - Men", "Monday Wednesday Friday", 5.50, "Get that look of amazement on your lovers face, courtesy of Narmada");
