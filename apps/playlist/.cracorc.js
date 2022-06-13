const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = () => {
  return {
    webpack: {
      configure: {
        output: {
          publicPath: "auto",
        },
      },
      plugins: {
        add: [
          new ModuleFederationPlugin({
            name: "playlist",
            filename: "remoteEntry.js",
            exposes: {
              "./Playlist": "./src/PlaylistContent",
            },
            remotes: {
              movies: "movies@http://localhost:3000/remoteEntry.js",
            },
            shared: {
              ...deps,
              "movies-content": {
                singleton: true,
              },
              "playlist-content": {
                singleton: true,
              },
              ui: {
                singleton: true,
              },
              card: {
                singleton: true,
              },
              store: {
                singleton: true,
              },
              tsconfig: {
                singleton: true,
              },
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },

              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
          }),
        ],
      },
    },
  };
};
