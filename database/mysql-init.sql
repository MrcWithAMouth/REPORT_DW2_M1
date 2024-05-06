CREATE SCHEMA IF NOT EXISTS `SMART-MANAGEMENT`;
USE `SMART-MANAGEMENT`;

CREATE TABLE Phone (
    phone_id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    emei VARCHAR(255) NOT NULL
);

INSERT INTO Phone (brand, model, emei) VALUES
('Apple', 'iPhone 12', '123456789012345'),
('Samsung', 'Galaxy S21', '234567890123456'),
('Xiaomi', 'Mi 11', '345678901234567'),
('Google', 'Pixel 5', '456789012345678'),
('OnePlus', '9 Pro', '567890123456789'),
('Huawei', 'P40 Pro', '678901234567890'),
('Motorola', 'Moto G Power', '789012345678901'),
('Sony', 'Xperia 1 II', '890123456789012'),
('LG', 'Wing', '901234567890123'),
('Nokia', '8.3 5G', '012345678901234'),
('Apple', 'iPhone SE', '123450987654321'),
('Samsung', 'Galaxy Note 20', '234501234567890'),
('Xiaomi', 'Redmi Note 10', '345612345678901'),
('Google', 'Pixel 4a', '456723456789012'),
('OnePlus', '8T', '567834567890123'),
('Huawei', 'Mate 40 Pro', '678945678901234'),
('Motorola', 'Razr 5G', '789056789012345'),
('Sony', 'Xperia 5 II', '890167890123456'),
('LG', 'Velvet', '901278901234567'),
('Nokia', '5.3', '012389012345678'),
('Apple', 'iPhone 11', '123490123456789'),
('Samsung', 'Galaxy A71', '234501234567890'),
('Xiaomi', 'Mi 10T Pro', '345612345678901'),
('Google', 'Pixel 4 XL', '456723456789012'),
('OnePlus', 'Nord N10', '567834567890123'),
('Huawei', 'P30 Pro', '678945678901234'),
('Motorola', 'Moto E', '789056789012345'),
('Sony', 'Xperia 10 II', '890167890123456'),
('LG', 'K92 5G', '901278901234567'),
('Nokia', '2.4', '012389012345678');

CREATE USER 'root'@'%' IDENTIFIED BY '12345678';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
ALTER USER 'root'@'%' IDENTIFIED WITH 'mysql_native_password' BY '12345678';
FLUSH PRIVILEGES;