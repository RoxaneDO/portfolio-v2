<?php
    // option pour la gestion de l'encodage
    $options=array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES ".$encodage);

    // Gestion des erreurs avec try catch
    try
    {
        $bdd = new PDO('mysql:host='.$hote.';port='.$port.';dbname='.$nom_bd,$identifiant, $mot_de_passe,$options);
        if($debug)
        {
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    } catch (PDOException $erreur)
    {
        if($debug)
        {
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        else
        {
                echo "Erreur, serveur inaccessible.";
        }
        exit();
    }
?>
