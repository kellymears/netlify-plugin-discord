# netlify-plugin-discord

Get build notifications in Discord.

## Configuration

You can either install the plugin through the netlify plugin directory or by installing as a package and adding the plugin to your `netlify.toml`.

```toml
[[plugins]]
  package = "netlify-plugin-discord"
```

Once installed, add the discord webhook url as a netlify environment variable with the name `DISCORD_WEBHOOK_URL`.

Happy building!
