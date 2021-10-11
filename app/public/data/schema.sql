CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS student;
CREATE TABLE student (
	id int PRIMARY KEY AUTO_INCREMENT ,
    username varchar(24) UNIQUE NOT NULL,
    name varchar(48)
);

INSERT INTO student (id, username, name) VALUES 
(1, 'tomgreg', 'Tom Gregory'),
(2, 'beth1', 'Beth Barnhart'),
(3, 'bipin', 'Prof. Prabhakar');

-- SELECT * FROM students;

DROP TABLE IF EXISTS offer;
CREATE TABLE offer (

    studentId int NOT NULL REFERENCES student(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	companyName VARCHAR(24) NOT NULL DEFAULT '',
    salary int NOT NULL DEFAULT 0,
    bonus int NOT NULL DEFAULT 0,
	offerDate date NOT NULL DEFAULT(CURRENT_DATE)
);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO offer(studentId, companyName, salary, bonus, offerDate) VALUES
  (2, 'KPMG', 95000, 7000, '2021-09-30'),
  (2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  (2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  (3, 'Amazon', 122000, 11000, '2021-10-15')
;



DROP TABLE IF EXISTS books;
CREATE TABLE books (
	title text, author text, year_Published INT, publisher text, page_count INT, msrp text
);

INSERT INTO books(title, author, year_Published, publisher, page_count, msrp) VALUES
  ('Alice in Wonderland', 'Lewis Carroll', 1865, 'Independently published', 101, '$5.97'),
  ('Strength Finder', 'Tom Rath', 2007, 'Gallup Press', 174, '$21.56'),
  ('Make Your Bed', 'William McRaven', 2017, 'Grand Central Publishing', 130, '$11.94'),
  ('The Moonlight Child', 'Karen McQuestionn', 2020, 'NIGHTSKY PRESS', 330, '$12.99'),
  ('It Ends with Us', 'Colleen Hoover', 2016, 'Atria', 384, '$10.80'),
  ('Think Again: The Power of Knowing What You Dont Know', 'Adam Grant', 2021, 'Viking', 320, '$16.75'),
  ('Dare to Lead: Brave Work. Tough Conversations. Whole Hearts', 'Brené Brown', 2018, 'Random House', 320, '$10.36'),
  ('The Premonition: A Pandemic Story', 'Michael Lewis', 2021, 'W. W. Norton & Company', 330, '$13.65')
;



