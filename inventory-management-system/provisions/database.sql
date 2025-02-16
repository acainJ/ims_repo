CREATE DATABASE ims;

-- CREATE TABLE Products (
--     product_id INT PRIMARY KEY AUTO_INCREMENT,
--     product_name VARCHAR(255) NOT NULL,
--     quantity_on_hand INT NOT NULL
-- );

-- CREATE TABLE Components (
--     component_id INT PRIMARY KEY AUTO_INCREMENT,
--     component_name VARCHAR(255) NOT NULL,
--     description TEXT
-- );

CREATE TABLE Suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(255) NOT NULL,
    contact_info TEXT
);

-- Many-to-Many Relationship between Products and Components
-- CREATE TABLE Product_Components (
--     product_id INT,
--     component_id INT,
--     PRIMARY KEY (product_id, component_id),
--     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
--     FOREIGN KEY (component_id) REFERENCES Components(component_id) ON DELETE CASCADE
-- );

-- -- Many-to-Many Relationship between Components and Suppliers
-- CREATE TABLE Component_Suppliers (
--     component_id INT,
--     supplier_id INT,
--     PRIMARY KEY (component_id, supplier_id),
--     FOREIGN KEY (component_id) REFERENCES Components(component_id) ON DELETE SET NULL,
--     FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id) ON DELETE SET NULL
-- );
