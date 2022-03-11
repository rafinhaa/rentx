<p align="center">
   <img src="docs/images/logo.png" alt="GoMarketplace" width="180"/>
</p>
<h4 align="center">
    <br><br>
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="###-content">Content</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-changelog">Changelog</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

<h1 align="center">
    <img width="200" style="border-radius: 10px" height="auto" alt="Screenshot" title="Screenshot" src="docs/videos/demo.gif" />
  <div>
</h1>

## 🔖 About

RentX é um aplicativo criado no curso de ReactNative da Rocketseat. Permite selecionar
selecionar carros em uma lista, escolher uma data, ver os carros alugados.

Foi criado um loader com o Lottie e animações com AnimatedReactNative.

## 🚀 Technologies

- [Expo](https://expo.io)
- [ReactNative](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://www.styled-components.com/)
- [Axios](https://axios-http.com/)
- [JsonServer](https://github.com/typicode/json-server)
- [Lottie](https://lottiefiles.com/)

## 🏁 Run

#### Clone the backend repository, install and start

```bash
git clone https://github.com/rafinhaa/rentx
cd rentx
yarn install
yarn start
```

#### Clone the app repository

```bash
git clone https://github.com/rafinhaa/rentx
cd rentx
```

#### Install dependencies

```bash
yarn install
```

#### Start project

```bash
yarn run ios
```

## ℹ️ Info

### Development setup

Operating system: macOS 12.1 (Chip M1)

⚠️ Caso o projeto não mostre os produtos:

```bash
adb reverse tcp:3333 tcp:3333
```

### Change the url of the server

```sh
vim src/services/api.ts
#baseURL: "http://<YOUR_IP_HERE>:3333",

```

## 📄 Changelog

v0.0.1
Update README.md

## License

[MIT](LICENSE)

**Free Software, Hell Yeah!**
