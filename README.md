# netlify-plugin-discord

Get build notifications in Discord.

## Configuration

Add the plugin to your build config file (`netlify.toml`)

```toml
[[plugins]]
  package = "netlify-plugin-discord"
```

Once installed, add the discord webhook url as a environment variable with the name `DISCORD_WEBHOOK_URL`.

Happy building!
