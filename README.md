# Création des pages de villes

Le but du TP est d'intégrer les pages de chaque villes du site.
La page contiendra les informations relatives aux villes contenues dans les fichiers javascript correspondants à chaque ville.
Exemple: paris.js pour la ville de Paris.

## Maquette à intégrer

Ci joint, l'exemple d'une page de ville à intégrer sur Invision:
[Lien de la maquette](https://invis.io/GNZVQWQY59T#/446681095_City)

## 1. Cloner le repo Github

1. Copier le lien HTTPS du repo (bouton vert "Code" en haut à droite, onglet HTTPS)
2. Ouvrir un terminal de commande (Terminal sur Mac, Powershell sur Windaube)
3. Se rendre dans le dossier voulu (`cd monDossier` pour aller dans un dossier enfant du dossier courant)
4. Écrire `git clone https://github.com/romain-cointet/tipi.git` et appuer sur ENTRER.
5. Et se rendre dans le dossier du srepo (`cd tipi`).

## 2. Créer sa branche Github

1. Vérifier où on est et si on a pas fait de modifs dans le code `git status`
2. On doit se trouver dans la branche _main_ et ne pas avoir de fichiers modifiés
3. Créer sa branche pour la ville `git checkout -b paris`

## 3. Création de la page

1. Créer une page HTML au nom de la ville à la racine du projet, exemple: paris.html.
2. Créer et lier le fichier un fichier CSS au nom de la ville dans le dossier _css_, exemple: css/paris.css.
3. Lier le fichier javascript correspondant.

## 4. Intégration de la page

Intégrer la page en HTML et CSS brut en respectant le design de la maquette Invision. Vous pouvez vous aider de la grille CSS créée dans _style.css_, ligne 44 à 102 et des autres éléments du fichier. Un exemple de la grille est contenu dans le fichier _test.html_.

Pour les images, utiliser des images random avec unsplash. Exemple: https://source.unsplash.com/random/32x32.

## 5. Ajout du Javascript

Dynamiser la page en utilisant les données de chaque ville contenu dans leur fichiers javascript respectifs.

## 6. Envoyer son code sur sa branche

1. Vérifier où on est et si on a pas fait de modifs dans le code `git status`
2. On doit se trouver sur sa branche, exemple _paris_ et avoir des fichiers modifiés.
3. Ajouter tous les fichiers à envoyer `git add -A`
4. Préparer l'envoi des fichiers `git commit -m "Mon message de description"`
5. Vérifier qu'il n'y a pas eu de modifications sur la branche `git pull`
6. Si il y a eu des modifications, vérifier qu'il n'y a pas de conflits, sinon les corriger et re ajouter les fichiers et les re préparer à l'envoi
7. Une fois que tout est bon, envoyer les fichiers sur sa branche: `git push`

Vous pouvez évidement pusher votre code n'importe quand et pas seulement quand vous avez tout fini pour le sauvegarder en ligne et éviter de perdre des modifications.

### Force et honneur

![May the Froce be with you](https://media4.giphy.com/media/zhPWlqR2CUQ6s/giphy.gif?cid=ecf05e477gvt6i9bf1wgkga3h94ehnkypp7f8h2a0fu0bfpe&rid=giphy.gif)
