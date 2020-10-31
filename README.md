# Exercices Truffle 1

Vous devrez rendre un projet `Truffle` qui est accessible depuis github.  
Créez un nouveau repo sur github et pusher le repo local qui est sur votre machine.  
**Ce projet ne doit pas être créé avec djinit, mais impérativement être créé à la main**

## 1 Project Calculator

Suivez le cours et créer un nouveau projet `Calculator`.
Vous devrez posséder un projet qui suit exactement ce qui a été vu en cours.

## 2 Error Linter

Corrigez toutes les erreurs que révèle les linters `solhint` et `eslint`.
Déployez nos smart contracts sur `ganache`.

## 3 tests des smart contracts

Suivant la même logique que pour les tests de `Adder` et `Suber`, écrivez les tests pour `Multiplier` et `Divisor`.
Dans le répertoire `test/` écrivez un autre fichier `calculator.test.js` qui contiendra les tests pour le smart contract `Calculator`.  
Vous devrez trouvez quels sont les tests les plus pertinents pour confirmez que nos smart contract sont corrects et sans bug.
N'oubliez pas dans le cadre de vos tests sur le smart contract `Calculator` d'obtenir une instance de `Adder`, `Subber`, `Multiplier`, `Divisor` avec la méthode `.new()`, car `Calculator` a besoin de connaitre l'adresse de ces smart contracts pour être correctement déployé.

Lancez vos tests avec `yarn test`.

## 4 Déployer sur les testnets

En utilisant truffle, déployer les smart contracts, `Adder`, `Suber`, `Multiplier`, `Divisor` et `Calculator` sur les testnets.

Il vous faudra récupérer des ethers de tests pour ces réseaux.

Fournir l'adresse des smart contracts déployés sur ces réseaux.

Contrats deployes sur **rinkeby**, **kovan**, **goerli** and **ropsten**:

- _Migrations_ at : `0x7D114Ced2f99206Ff685e8c3D73942FC48515c5E`
- _Adder_ at : `0x3F0DA78071f6F2cffeEEBcC766b3dA014af80376`
- _Suber_ at : `0x8370184D3dA88AEbbe79e838527f1523C7ceB645`
- _Multiplier_ at : `0x4E97409babb36062A575b334E4D1e7Ce47925BAf`
- _Divisor_ at : `0x42794a5D2b2345B8974df3299B546E50772f6f07`
- _Calculator_ at : `0x7CA00FD7f1d4B5d8144b537db258Bad13056aB7A`
