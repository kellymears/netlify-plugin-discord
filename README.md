# netlify-plugin-discord

![npm](https://img.shields.io/npm/v/netlify-plugin-discord?label=npm&style=flat-square)

![Notification](/assets/notice.png)

Get build notifications in Discord.

## Table of Contents

- [Create a Discord webhook](#create-a-discord-webhook)
- [Installation](#installation)
- [Configuration](#configuration)

## Create a Discord webhook

Edit the channel where you would like the webhook to message:

![Edit channel](/assets/edit-channel.png)

Click `View Webhooks` in the `Integrations` menu:

![Integrations](/assets/integrations.png)

Add the webhook. Copy the Webhook URL for use configuring this build plugin.

![Webhook](/assets/edit-webhook.png)

## Installation

```sh
yarn add netlify-plugin-discord
```

Add the plugin to [your netlify config](https://docs.netlify.com/configure-builds/file-based-configuration/).

```toml
# netlify.toml

[[plugins]]
  package = "netlify-plugin-discord"
```

## Configuration

Declare the `DISCORD_WEBHOOK_URL` as [a netlify build setting](https://docs.netlify.com/configure-builds/file-based-configuration/#build-settings).

```toml
# netlify.toml

[build.environment]
  DISCORD_WEBHOOK_URL = "https://discord.com/your-webhook-url"
```

Or, declare the `DISCORD_WEBHOOK_URL` environment variable [using the Netlify dashboard](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables).

Happy building!
