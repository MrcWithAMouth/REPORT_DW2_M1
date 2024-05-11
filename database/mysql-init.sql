CREATE SCHEMA IF NOT EXISTS `SMART-MANAGEMENT`;
USE `SMART-MANAGEMENT`;

CREATE TABLE Company (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    company_id INT, 
    FOREIGN KEY (company_id) REFERENCES Company(company_id) ON DELETE SET NULL
);

CREATE TABLE Phone (
    phone_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    emei VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE SET NULL
);

CREATE TABLE Accessories (
    phone_id INT NOT NULL,
    screen_protector BOOLEAN DEFAULT FALSE,
    case_protector BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (phone_id) REFERENCES Phone(phone_id) ON DELETE CASCADE
);

INSERT INTO Company (name) VALUES
('ONIS'),
('Omatapalo Engenharia'),
('On-trading'),
('Pemel Metal'),
('Pemel Instalações');

INSERT INTO User (name, email, password, company_id) VALUES
('João Silva', 'joao.silva@example.com', '12345678', 1),
('Ana Santos', 'ana.santos@example.com', '12345678', 2),
('Pedro Costa', 'pedro.costa@example.com', '12345678', 3),
('Marta Oliveira', 'marta.oliveira@example.com', '12345678', 4),
('Rui Pereira', 'rui.pereira@example.com', '12345678', 5),
('Sofia Rodrigues', 'sofia.rodrigues@example.com', '12345678', 1),
('Carlos Fernandes', 'carlos.fernandes@example.com', '12345678', 2),
('Inês Martins', 'ines.martins@example.com', '12345678', 3),
('Luís Ferreira', 'luis.ferreira@example.com', '12345678', 4),
('Teresa Lopes', 'teresa.lopes@example.com', '12345678', 5);

INSERT INTO Phone (user_id, brand, model, emei) VALUES
(1, 'Apple', 'iPhone 12', '123456789012345'),
(2, 'Samsung', 'Galaxy S21', '234567890123456'),
(3, 'Xiaomi', 'Mi 11', '345678901234567'),
(4, 'Google', 'Pixel 5', '456789012345678'),
(NULL, 'OnePlus', '9 Pro', '567890123456789'),
(5, 'Huawei', 'P40 Pro', '678901234567890'),
(NULL, 'Motorola', 'Moto G Power', '789012345678901'),
(NULL, 'Sony', 'Xperia 1 II', '890123456789012'),
(3, 'LG', 'Wing', '901234567890123'),
(4, 'Nokia', '8.3 5G', '012345678901234'),
(NULL, 'Apple', 'iPhone SE', '123450987654321'),
(NULL, 'Samsung', 'Galaxy Note 20', '234501234567890'),
(6, 'Xiaomi', 'Redmi Note 10', '345612345678901'),
(NULL, 'Google', 'Pixel 4a', '456723456789012'),
(8, 'OnePlus', '8T', '567834567890123'),
(2, 'Huawei', 'Mate 40 Pro', '678945678901234'),
(1, 'Motorola', 'Razr 5G', '789056789012345'),
(NULL, 'Sony', 'Xperia 5 II', '890167890123456'),
(NULL, 'LG', 'Velvet', '901278901234567'),
(NULL, 'Nokia', '5.3', '012389012345678'),
(NULL, 'Apple', 'iPhone 11', '123490123456789'),
(NULL, 'Samsung', 'Galaxy A71', '234501234567890'),
(NULL, 'Xiaomi', 'Mi 10T Pro', '345612345678901'),
(NULL, 'Google', 'Pixel 4 XL', '456723456789012'),
(NULL, 'OnePlus', 'Nord N10', '567834567890123'),
(NULL, 'Huawei', 'P30 Pro', '678945678901234'),
(NULL, 'Motorola', 'Moto E', '789056789012345'),
(NULL, 'Sony', 'Xperia 10 II', '890167890123456'),
(NULL, 'LG', 'K92 5G', '901278901234567'),
(NULL, 'Nokia', '2.4', '012389012345678');

INSERT INTO Accessories (phone_id, screen_protector, case_protector) VALUES
(1, TRUE, TRUE), 
(2, TRUE, FALSE), 
(3, FALSE, TRUE), 
(4, TRUE, TRUE), 
(5, FALSE, FALSE), 
(6, TRUE, TRUE), 
(7, FALSE, TRUE), 
(8, TRUE, FALSE), 
(9, FALSE, TRUE), 
(10, TRUE, TRUE), 
(11, TRUE, TRUE), 
(12, TRUE, TRUE), 
(13, FALSE, FALSE), 
(14, TRUE, FALSE), 
(15, TRUE, TRUE), 
(16, FALSE, FALSE), 
(17, TRUE, TRUE), 
(18, TRUE, FALSE), 
(19, TRUE, TRUE), 
(20, FALSE, FALSE), 
(21, TRUE, TRUE), 
(22, TRUE, FALSE), 
(23, FALSE, TRUE), 
(24, TRUE, TRUE), 
(25, FALSE, FALSE), 
(26, TRUE, TRUE), 
(27, FALSE, TRUE), 
(28, TRUE, FALSE), 
(29, FALSE, TRUE), 
(30, FALSE, FALSE); 



GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
ALTER USER 'root'@'%' IDENTIFIED WITH 'mysql_native_password' BY '12345678';
FLUSH PRIVILEGES;
