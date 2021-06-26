<?php

class Category {

    public function __construct() {
    }

    public function listProduct() {
        $host = 'localhost';
        $nom_bd = 'portfolio';
        $identifiant = 'Merlin';
        $password = '123456789';
        $error = null;

        echo "connexion réussie";

        try {
            $maBase = new PDO("mysql:host={$host};dbname={$nom_bd}", $identifiant, $password);
            $maBase->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $requete_categorie='SELECT * from categorie';
            $resultats_categorie=$maBase->query($requete_categorie); // exécute une requete SQL, retourne en tant qu'objet PDO
            $categorie=$resultats_categorie->fetchAll(PDO::FETCH_OBJ); // fetch = "va chercher"
            $resultats_categorie->closeCursor(); // products = "fermeture du curseur d'analyse des résultats"
        }

        catch(PDOException $e) {
            echo "Erreur : " . $e->getMessage();
            echo "Erreur code : ". $e->getCode();
        }
    }
}

?>
