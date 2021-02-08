# netlify-plugin-discord

![npm](https://img.shields.io/npm/v/netlify-plugin-discord?label=npm&style=flat-square)

Get build notifications in Discord.

## Configuration

Add the plugin to your build config file (`netlify.toml`)

```toml
[[plugins]]
  package = "netlify-plugin-discord"
```

Once installed, add the discord webhook url as a environment variable with the name `DISCORD_WEBHOOK_URL`.

Happy building!
