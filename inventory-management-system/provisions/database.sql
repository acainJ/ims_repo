CREATE DATABASE ims;

USE ims;

CREATE TABLE Suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    contact_info TEXT
);

CREATE TABLE Components (
    component_id INT PRIMARY KEY AUTO_INCREMENT,
    component_name VARCHAR(255) NOT NULL,
    description TEXT,
    supplier_id INT NULL, -- Nullable foreign key
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    quantity_on_hand INT NOT NULL,
    component_id INT NOT NULL, -- Nullable foreign key
    FOREIGN KEY (component_id) REFERENCES Components(component_id)
);
