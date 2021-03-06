<div id="top"></div>

[![Build][build-shield]][build-url]
[![Version][version-shield]][version-url]
[![Language][language-shield]][language-url]
[![Roadmap][roadmap-shield]][roadmap-url]
[![License][license-shield]][license-url]

<br />
<div align="center">
<a href="https://imt-atlantique-fil-2020-2023.github.io/NADA-webapp/">
<img src="src/assets/NADA.svg" alt="Logo" width="200" height="200">
</a>

<h2 align="center">N.A.D.A Webapp</h2>

<p align="center">National Atmospheric Data | Capture data from airport sensor and visualize it.</p>
<p align="center">
<a href="https://imt-atlantique-fil-2020-2023.github.io/NADA-webapp/">
<strong>Browse the website »</strong>
</a>
<br />
<br />
<a href="https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-extended/">View Back</a>
·
<a href="https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp/issues">Report Bug</a>
·
<a href="https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp/issues">Request Feature</a>
</p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![NADA webapp Screen Shot][screenshot]](https://example.com)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Vite.js](https://vitejs.dev/)
- [Vue3.js](https://v3.vuejs.org/)
- [ApexCharts.js](https://apexcharts.com/)
- [Axios.js](https://axios-http.com/)
- [Graphql.js](https://graphql.org)
- [Appolo.js](https://www.apollographql.com/)
- [SplitPanes.js](https://antoniandre.github.io/splitpanes/)
- [OpenLayers.js](https://openlayers.org/)
- [Proj4.js](http://proj4js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You will need several programs to run this application on your machine:

- [git](), to fetch and manage the project files
- [docker](), if you want to run the app in a container
- [node 14](), for the development or deployment server

For node, we recommend the use of [nvm]()

```
nvm install 14.X.X
nvm use 14.X.X
```

### Installation

**To fetch the project files**

1. Clone this project (`git clone https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp.git`)

**To launch the development env**

2. Then setup the dependancies (`npm install`)
3. Launch the vite dev app (`npm run dev`)
4. Launch the appolo mock (`npm mock:api`)

> **In case of problem with the mock, do it manually with:**
>
> ```
> npm install -g graphql-faker
> graphql-faker --port 9002 schema.graphql
> ```

**To compile and deploy the app**

5. Check the preview (`npm run serve`)
6. Build the app (`npm run build`)
7. browse the compiled version (`cd ./dist`)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#top">back to top</a>)</p>

[build-shield]: https://img.shields.io/github/workflow/status/IMT-Atlantique-FIL-2020-2023/NADA-webapp/Build%20Vue/main?style=flat-square
[build-url]: https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp/blob/main/.github/workflows/main.yml
[version-shield]: https://img.shields.io/github/package-json/v/IMT-Atlantique-FIL-2020-2023/NADA-webapp?style=flat-square
[version-url]: https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp/blob/main/package.json
[language-shield]: https://img.shields.io/github/languages/top/IMT-Atlantique-FIL-2020-2023/NADA-webapp?style=flat-square
[language-url]: https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp/search?l=vue
[roadmap-shield]: https://img.shields.io/badge/roadmap-available-brightgreen?style=flat-square
[roadmap-url]: https://github.com/orgs/IMT-Atlantique-FIL-2020-2023/projects/1
[license-shield]: https://img.shields.io/github/license/IMT-Atlantique-FIL-2020-2023/NADA-webapp?style=flat-square
[license-url]: https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp/blob/main/LICENSE/
[logo]: src/assets/logo.png
[screenshot]: src/assets/screenshot.png
