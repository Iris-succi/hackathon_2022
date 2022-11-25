-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: food_api
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `resto`
--

DROP TABLE IF EXISTS `resto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `adress` varchar(200) NOT NULL,
  `number` int NOT NULL,
  `pictures` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resto`
--

LOCK TABLES `resto` WRITE;
/*!40000 ALTER TABLE `resto` DISABLE KEYS */;
INSERT INTO `resto` VALUES (1,'Japanese','Wasabi','76 Rue d\'Anvers, 69007 Lyon',437280877,'https://static.wixstatic.com/media/e18ebd_46b5c686ae2a4676a32d271ea441fe0e~mv2.jpeg/v1/fill/w_1743,h_535,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e18ebd_46b5c686ae2a4676a32d271ea441fe0e~mv2.jpeg'),(2,'Italian','Trattino',' Rue Clément Marot, 69007 Lyon',472761047,'https://trattino.fr/wp-content/uploads/2022/07/IMG_1849-2-768x340.jpg'),(3,'Canadian','Steack House','ZAC de Cap Malo, 35520 La Mézière',230966850,'https://canadiansteakhouse.fr/wp-content/uploads/2019/04/Inte%CC%81rieur-canadian-steak-house-pace-5-min.jpg'),(4,'Indian','Lal Qila','4 Place Saint-Paul 69005 Lyon',472078211,'https://www.lyonresto.com/contenu/photo_restaurant/0_photo_automatique_big/lal_qila/01-salle-ensemble-lustre-restaurant-indien-lal-qila-lyon.jpg'),(5,'Thaï','Sabaï Sabaï','4 Petite rue des Feuillants, 69001 Lyon',426724587,'https://mypresquile.com/wp-content/uploads/2021/10/Tapas-sabai-sabai.jpg'),(6,'French','Les Adrets','30, rue du Bœuf 69005 Lyon',478382430,'http://les-adrets.com/wp-content/uploads/2018/02/restaurant_les_adrets_4.jpg');
/*!40000 ALTER TABLE `resto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-25  8:35:29
