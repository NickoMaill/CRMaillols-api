# Bienvenue sur sur l'api du site Untel Officiel

Une simple de projet de type crm.

## Pré-requis

pour utiliser l'application vous aurez besoin de :

-   un IDE de type [Vscode](https://code-visualstudio-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=sc) ou [Sublime Text](https://www.sublimetext.com/)
-   [nodeJS](https://nodejs.org/en/)
-   [Docker](https://www.docker.com/)
-   une gestionnaire de db comme [pgadmin](https://www.pgadmin.org/) ou [beekeeper](https://www.beekeeperstudio.io/)
-   [nodemon](https://www.npmjs.com/package/nodemon) (installé en global --> npm i -g)

## Installations

Pour installer le projet suivez les commandes suivantes dans l'ordre :

1. Visez le dossier de votre choix avec votre terminal

2. Clonez le repo en tapant :

```sh
git clone https://github.com/NickoMaill/Untel-back.git
```

3. Placer dans le dossier cloné :

```sh
cd CRMaillols-back
```

3. Installez les différentes librairies :

```sh
npm install
```

4. copier le fichier fournis par votre administrateur .env.development.local

5. a la racine du projet executer ensuite la commande

    ```sh
    npm run sequelize-init
    ```

    avec cette commande on initialise notre projet sequelize et toutes ses migrations

    tapez ensuite

    ```sh
    npm run docker
    ```

    **vous devez avoir docker ouvert pour cela fonctionne !**

6. importer ensuite un dump de db (fourni par votre administrateur) dans le gestionnaire de votre choix (cf ceux proposer en début de doc)
   
7. Pour lancer l'application executer la commande :

    ```sh
    npm run dev
    ```

    pour le mode développement

    ```sh
    npm run start
    ```
    pour le mode production

**Bravo il ne vous reste plus qu'a taper dans postman `localhost:8000/` pour tester l'api!**
