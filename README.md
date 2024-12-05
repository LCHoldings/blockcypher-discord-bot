

<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/LCHoldings/blockcypher-discord-bot">
    <img src="https://cloud-c2e6r9vbt-hack-club-bot.vercel.app/0logo.png" alt="Logo" style="border-radius: 10px" width="80" height="80">
  </a>

  <h3 align="center">BlockCypher Discord Bot</h3>

  <a align="center" href="https://discord.com/oauth2/authorize?client_id=1314039232121143326">
  </a>

  <p align="center">
    Take your crypto transactions to your Discord chat.
    <br />
    <a href="https://discord.com/oauth2/authorize?client_id=1314039232121143326">Add to Discord</a>
    ·
    <a href="https://github.com/LCHoldings/blockcypher-discord-bot/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/LCHoldings/blockcypher-discord-bot/fork">Fork Project</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## 📝 About The Project

![Example Usage](https://cloud-99ebgyexr-hack-club-bot.vercel.app/0example1.png)

I made this project to learn more about the Discord API and how to create a Discord bot using the api. The bot is made to be used in a discord server or Dm where you want to keep track of your crypto transactions. The bot uses the BlockCypher API to fetch information about transactions and addresses. The bot can be used to fetch information about a specific transaction or address.

The code is open-source and can be used by anyone who wants to learn more about the Discord API or how to create a Discord bot. The bot is also available to be added to your discord server or dm if you want to use it using this link or finding it on the Discord discovery. *still in review as of now*.

There is a Slack version of this bot available [here](https://github.com/LCHoldings/blockcypher-slack-bot) by [Lazyllama](https://github.com/laylllama) if you are interested in that instead!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### 🛠️ Made using

This section contains some of the most notable tools/libraries used in this project.

* [![Discord](https://img.shields.io/badge/discord-000000?style=for-the-badge&logo=discord&color=161616
)](https://slack.com)
* ![Axios](https://img.shields.io/badge/axios-000000?style=for-the-badge&logo=axios&color=5A29E4)
* ![TypeScript](https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&color=161616)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 🏗️ Getting Started

How to run this project locally.

### Prerequisites

1. *Copy the `.env.example` file to `.env` and fill out the fields with your own information.*

```env
# The Discord Application Id
APP_ID=123456789

# The Discord Bot Token
DISCORD_TOKEN=123456789

# Discord Bots Public Key
PUBLIC_KEY=123456789


```

2. *Install Nodemon* (optional)
```sh
npm install -g nodemon
```


### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._


1. First of all, run the following command to install the necessary dependencies.
    ```sh
    npm install
    ```
2. Run the following command to start the dev server.
    ```sh
    npm run dev
    ```
3. Follow this tutorial to use Ngrok to expose your local server to the internet.
    - Sign up for an account on [Ngrok](https://ngrok.com/)
    - Download the Ngrok client and follow the instructions to set it up.
    - Run the following command to expose your local server to the internet. Where PORT is the port you are running the server on.
    ```sh
    ngrok http PORT
    ```
    - Copy the URL that is generated and use it in the next steps.

4. Create a Discord Bot application
    - Go to the [Discord Developer Page](https://discord.com/developers/applications) and create a new application.
    - Copy the Application ID, Discord Token, Public Key Into the env
5. Add the Discord Bot to a Server or Dm
6. Enjoy!
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## 🗺️ Roadmap

- [X] 🚢 Release project
- [ ] 📝 Add more commands and suppport more crypto currencys
- [ ] 🧹 Code Cleanup
- [ ] 📚 Add more documentation
- [ ] 📦 Better user experience

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## ⛑️ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make the portfolio better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!

1. Fork the Project
2. Change the project and add your files or changes (`git add *`)
3. Commit your Changes (`git commit -m 'Feat | Added XXXX to the XXX'`)
4. Push to the Branch (`git push`)
5. Open a Pull Request

### 🏆 Top contributors:

<a href="https://github.com/LCHoldings/blockcypher-discord-bot/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LCHoldings/blockcypher-discord-bot" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## 💌 Contact

Cyber - [@Lazyllamaa](https://discord.com/users/754965470888722484) - Yo@cyberdev.tech

Project Link: [https://github.com/lcholdings/blockcypher-discord-bot](https://github.com/lcholdings/blockcypher-discord-bot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## 🌟 Acknowledgments

Thanks to the following people for their help and inspiration:

* [Readme Template](https://github.com/othneildrew/Best-README-Template)
* [Discord API](https://discord.com/developers/docs/reference)
* [Lazyllama](https://github.com/cyberdev-tech)
* [BlockCypher](https://www.blockcypher.com/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[contributors-shield]: https://img.shields.io/github/contributors/lcholdings/blockcypher-discord-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/lcholdings/blockcypher-discord-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lcholdings/blockcypher-discord-bot.svg?style=for-the-badge
[forks-url]: https://github.com/lcholdings/blockcypher-discord-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/lcholdings/blockcypher-discord-bot.svg?style=for-the-badge
[stars-url]: https://github.com/lcholdings/blockcypher-discord-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/lcholdings/blockcypher-discord-bot.svg?style=for-the-badge
[issues-url]: https://github.com/lcholdings/blockcypher-discord-bot/issues
