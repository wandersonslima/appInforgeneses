
-- Criando o Banco de Dados --
CREATE SCHEMA `inforgenesesdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

-- Tabela Usuario --
CREATE TABLE usuarios (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(55) NOT NULL,
email VARCHAR(55) NOT NULL,
senha VARCHAR(255) NOT NULL
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

-- Tabela Cursos --
CREATE TABLE cursos (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(55) NOT NULL,
categoria VARCHAR(55) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
descricao VARCHAR(255) NOT NULL,
src_img VARCHAR(50) NOT NULL,
criacao TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

-- Inserindo Categorias --

INSERT INTO categorias(id,nome) VALUES (NULL,"Desenvolvimento");

INSERT INTO categorias(id,nome) VALUES (NULL,"Redes e Segurança");

INSERT INTO categorias(id,nome) VALUES (NULL,"Design Gráfico e Ilustração");

INSERT INTO categorias(id,nome) VALUES (NULL,"Produtividade no Escritório");

INSERT INTO categorias(id,nome) VALUES (NULL,"Marketing");

-- Inserindo Cursos --

INSERT INTO cursos(id,nome,categoria,preco,descricao, src_img) VALUES (NULL,"Curso de PHP 8 - A Linguagem","Desenvolvimento","349,90","Aprenda a Linguagem PHP8 com inúmeros exemplos, exercícios e explicações claras e objetivas. Comece do Zero em PHP 8.", "assets/img/id-1.jpg");

INSERT INTO cursos(id,nome,categoria,preco,descricao, src_img) VALUES (NULL,"Arquitetura de Redes","Redes e Segurança","149,90","Curso completo de Arquitetura de Redes, onde você aprenderá os fundamentos sobre funcionamento de redes de computadores.","assets/img/id-2.jpg");

INSERT INTO cursos(id,nome,categoria,preco,descricao, src_img) VALUES (NULL,"Adobe Photoshop Completo - do Iniciante ao Avançado","Design Gráfico e Ilustração","349,90","Aprenda a tratar fotografias para deixá-las com aspecto profissional, dominando as principais ferramentas do Photoshop.", "assets/img/id-3.jpg");

INSERT INTO cursos(id,nome,categoria,preco,descricao, src_img) VALUES (NULL,"Curso de Excel 2019 e 365 para Qualificação Profissional","Produtividade no Escritório","349,90","Aprenda a tratar fotografias para deixá-las com aspecto profissional, dominando as principais ferramentas do PhotoshopDo básico ao avançado, os recursos mais utilizados nas empresas, como tabelas e gráficos dinâmicos, Power Query e outros.", "assets/img/id-4.jpg");

INSERT INTO cursos(id,nome,categoria,preco,descricao, src_img) VALUES (NULL,"Curso Completo de Instagram Marketing","Marketing","449,90","Torne-se um líder no Instagram, Ganhe da concorrência, e crie uma comunidade de fãs apaixonados pelo seu conteúdo.", "assets/img/id-5.jpg");

-- Inserindo Usuario --

INSERT INTO usuarios (id,nome, email, senha) VALUES (NULL,"Wanderson","wanderson@gmail.com","12345");

